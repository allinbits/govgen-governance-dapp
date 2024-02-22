import { ref } from "vue";
import { useStorage } from "@vueuse/core";
import { useConfig } from "./useConfig";
import * as GithubTypes from "../types/github/index";
import router from "../router/index";

const config = useConfig();
const username = ref<string>();
const avatar = ref<string>();
const storedJwtToken = useStorage<string>(config.STORAGE_KEY, null);
const storedPreviousPath = useStorage<string>(config.PREVIOUS_LINK_KEY, null);

/**
 * Propogate the username, and verify the token is valid.
 */
const updateUser = async () => {
  // Check if token already exists
  if (!storedJwtToken.value) {
    return;
  }

  // Verify token
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
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

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

      // Rewrite URL in bar, and remove temporary token
      urlParams.delete("token");
      if (urlParams.size >= 2) {
        window.history.replaceState(
          {},
          "",
          `${window.location.origin}${window.location.pathname}?${urlParams.toString()}${window.location.hash}`,
        );
      } else {
        window.history.replaceState(
          {},
          "",
          `${window.location.origin}${window.location.pathname}${window.location.hash}`,
        );
      }

      updateUser();
      return;
    }

    updateUser();
  };

  /**
   * Logs the user out, and clears local storage keys
   *
   */
  const logout = () => {
    storedPreviousPath.value = null;
    storedJwtToken.value = null;
    username.value = undefined;
    avatar.value = undefined;
  };

  const login = () => {
    storedPreviousPath.value = `${window.location.pathname}`;
    window.open(config.ENDPOINT + "/api/login", "_self");
  };

  /**
   * Returns whether the user is logged in with a GitHub account or not
   *
   * @return {boolean}
   */
  const isLoggedIn = (): boolean => {
    return typeof username.value === "string";
  };

  /**
   * Returns the repository used for this configuration.
   */
  const getRepo = (): string => {
    return config.REPO;
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
    data.repo = getRepo();

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

    const { discussionCategories } = results.data.search.nodes[0];
    if (!discussionCategories) {
      return undefined;
    }

    const filteredCategories = discussionCategories.nodes.filter((x) => x.name.toLowerCase().includes(data.name));
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
  const toggleUpvote = async (data: GithubTypes.UpvoteRequest): Promise<void | undefined> => {
    if (!storedJwtToken.value) {
      return undefined;
    }

    const apiPath = data.didUpvote ? "/api/discussion/downvote" : "/api/discussion/upvote";
    const result = await fetch(config.ENDPOINT + apiPath, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: storedJwtToken.value,
      },
      body: JSON.stringify({ subjectId: data.subjectId }),
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
  const goToPreviousPath = (token: string | null) => {
    if (!storedPreviousPath.value) {
      return;
    }

    if (!token) {
      storedPreviousPath.value = null;
      return;
    }

    router.replace(storedPreviousPath.value + `?token=${token}`);
    storedPreviousPath.value = null;
  };

  return {
    username,
    avatar,
    isLoggedIn,
    getCategory,
    getDiscussion,
    goToPreviousPath,
    getRepo,
    login,
    logout,
    post,
    setup,
    toggleUpvote,
  };
};
