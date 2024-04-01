import { ref, computed } from "vue";
import { useStorage } from "@vueuse/core";
import { useConfig } from "@/composables/useConfig";
import * as GithubTypes from "@/types/github/index";
import { useRoute, useRouter } from "vue-router";

const config = useConfig();
const username = ref<string>();
const avatar = ref<string>();
const isLoggedIn = computed(() => typeof username.value !== "undefined");
const storedJwtToken = useStorage<string>(config.STORAGE_KEY, null);
const storedPreviousPath = useStorage<string>(config.PREVIOUS_LINK_KEY, null);

/**
 * Propogate the username, and verify the token is valid.
 */
const updateUser = async () => {
  if (!storedJwtToken.value) {
    return;
  }

  const res = await fetch(config.ENDPOINT + `/api/user`, {
    headers: { Authorization: storedJwtToken.value },
    method: "GET",
  }).catch((err) => {
    console.error(err);
    return undefined;
  });

  if (!res || !res.ok || res.status !== 200) {
    storedJwtToken.value = null;
    return;
  }

  const data: GithubTypes.UserResponse = await res.json();
  username.value = data.login;
  avatar.value = data.avatar_url;
};

export const useGithubDiscussions = () => {
  const router = useRouter();
  const route = useRoute();

  /**
   * If a temporary token is passed via the URL Search Params we do the following
   * 1. Exchange the temporary token for a jwt token
   * 2. Store the JWT in local storage
   *
   * Note: Temporary token is wiped from the server on 1st fetch
   *
   * If there is not a token passed, we check local storage, and verify
   */
  const setup = async (): Promise<void> => {
    const token = route.query.token as string | null;

    // Check the URL Params for `token` and exchange temporary token for JWT for storage
    if (token) {
      const res = await fetch(config.ENDPOINT + `/api/token`, {
        headers: { Authorization: token },
        method: "GET",
      }).catch((err) => {
        console.error(err);
        return undefined;
      });

      if (!res || !res.ok || res.status !== 200) {
        return;
      }

      storedJwtToken.value = await res.text();

      const currentQuery = { ...route.query };
      delete currentQuery.token;

      updateUser();
      goToPreviousPath();
      return;
    }

    updateUser();
  };

  /**
   * Logs the user out, and clears local storage keys
   */
  const logout = () => {
    storedPreviousPath.value = null;
    storedJwtToken.value = null;
    username.value = undefined;
    avatar.value = undefined;
  };

  /**
   * Forces the user to login through GitHub oAuth Provider
   */
  const login = () => {
    storedPreviousPath.value = `${route.path}`;
    window.open(config.ENDPOINT + "/api/login", "_self");
  };

  /**
   * Returns full discussion info, or creates a discussion if a `term` does not exist.
   *
   * A `term` is also known as a `title`.
   *
   * @param {GithubTypes.DiscussionRequest} data
   */
  const getDiscussion = async (
    data: GithubTypes.DiscussionRequest,
  ): Promise<GithubTypes.DiscussionResponse | undefined> => {
    data.repo = config.REPO;

    const result = await fetch(config.ENDPOINT + "/api/discussion", {
      method: "POST",
      headers: storedJwtToken.value
        ? {
            "Content-Type": "application/json",
            Authorization: storedJwtToken.value,
          }
        : { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).catch((err) => {
      console.error(err);
      return undefined;
    });

    if (!result || !result.ok || result.status !== 200) {
      return undefined;
    }

    return await result.json();
  };

  const getDiscussionCommentCount = async (
    data: GithubTypes.DiscussionCommentRequest,
  ): Promise<GithubTypes.DiscussionCommentCountResponse> => {
    data.repo = config.REPO;

    const result = await fetch(config.ENDPOINT + "/api/discussion/comment/count", {
      method: "POST",
      headers: storedJwtToken.value
        ? {
            "Content-Type": "application/json",
            Authorization: storedJwtToken.value,
          }
        : { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).catch((err) => {
      console.error(err);
      return undefined;
    });

    if (!result || !result.ok || result.status !== 200) {
      return { count: 0 };
    }

    return await result.json();
  };

  /**
   * Returns a category id that matches the name provided
   *
   * @param {GithubTypes.CategoryRequest} data
   */
  const getCategory = async (data: GithubTypes.CategoryRequest): Promise<string | undefined> => {
    const result = await fetch(config.ENDPOINT + "/api/repo/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).catch((err) => {
      console.error(err);
      return undefined;
    });

    if (!result || !result.ok || result.status !== 200) {
      return undefined;
    }

    const results: GithubTypes.CategoriesResponse = await result.json();
    if (results.data.search.nodes.length <= 0) {
      console.error(`Failed to find category with name ${data.name}`);
      return undefined;
    }

    const { discussionCategories } = results.data.search.nodes[0];
    if (!discussionCategories) {
      console.error(`Found categories, but could not find discussion category`);
      return undefined;
    }

    const filteredCategories = discussionCategories.nodes.filter((x) =>
      x.name.toLowerCase().includes(data.name.toLowerCase()),
    );

    return filteredCategories.length <= 0 ? undefined : filteredCategories[0].id;
  };

  /**
   * Post a message to a given discussion, requires user to be authenticated
   *
   * @param {GithubTypes.PostRequest} data
   */
  const post = async (data: GithubTypes.PostRequest): Promise<GithubTypes.CommentResponse | undefined> => {
    if (!storedJwtToken.value) {
      return undefined;
    }

    const result = await fetch(config.ENDPOINT + "/api/discussion/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: storedJwtToken.value,
      },
      body: JSON.stringify(data),
    }).catch((err) => {
      console.error(err);
      return undefined;
    });

    if (!result || !result.ok || result.status !== 200) {
      return undefined;
    }

    return await result.json();
  };

  /**
   * Upvote a message
   *
   * @param {GithubTypes.UpvoteRequest} data
   */
  const toggleVote = async (data: GithubTypes.ReactionRequest): Promise<void | undefined> => {
    if (!storedJwtToken.value) {
      return undefined;
    }

    const result = await fetch(config.ENDPOINT + "/api/discussion/react", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: storedJwtToken.value,
      },
      body: JSON.stringify({
        subjectId: data.subjectId,
        reaction: data.type === "upvote" ? "THUMBS_UP" : "THUMBS_DOWN",
        didReact: data.isToggled, // Do not set opposite, the API handles it
      }),
    }).catch((err) => {
      console.error(err);
      return undefined;
    });

    if (!result || !result.ok || result.status !== 200) {
      return undefined;
    }

    return await result.json();
  };

  /**
   * Reroute the user to the page they logged in from and pass the token
   *
   * @param {(string | null)} token
   * @return
   */
  const goToPreviousPath = async () => {
    if (!storedPreviousPath.value) {
      return;
    }

    router.replace(storedPreviousPath.value);
    storedPreviousPath.value = null;
  };

  return {
    username,
    avatar,
    isLoggedIn,
    getCategory,
    getDiscussion,
    getDiscussionCommentCount,
    goToPreviousPath,
    login,
    logout,
    post,
    setup,
    toggleVote,
  };
};
