import { ref, computed } from "vue";
import * as GithubTypes from "@/types/github/index";
import { useConfig } from "@/composables/useConfig";
import { useGithubDiscussions } from "@/composables/useGithubDiscussions";
import * as Utility from "@/utility/index";

const { getDiscussion, getCategory, post, toggleVote } = useGithubDiscussions();
const Config = useConfig();

export function useGithubDiscusser(threadTitle: string) {
  const term = ref(threadTitle);
  const category = ref();
  const discussion = ref<GithubTypes.DiscussionResponse>();
  const isPosting = ref(false);
  const isRefreshing = ref(false);
  const isLoading = ref(true);
  const didCommentsFailToLoad = ref(false);

  /**
   * Refreshes the discussion contents
   *
   * @return
   */
  async function refresh() {
    isRefreshing.value = true;
    category.value = await getCategory({ repo: Config.REPO, name: "Proposals" });

    if (!category.value) {
      isRefreshing.value = false;
      didCommentsFailToLoad.value = true;
      setTimeout(refresh, Config.DISCUSSION_REFRESH_TIME);
      return;
    }

    discussion.value = await getDiscussion({
      repo: Config.REPO,
      count: 100,
      term: term.value,
      category: category.value,
      upsert: true,
    });

    if (!discussion.value) {
      didCommentsFailToLoad.value = true;
      setTimeout(refresh, Config.DISCUSSION_REFRESH_TIME);
    } else {
      isLoading.value = false;
    }

    isRefreshing.value = false;
  }

  async function postMessage(msg: string): Promise<boolean> {
    if (isPosting.value) {
      return false;
    }

    isPosting.value = true;

    if (!discussion.value) {
      isPosting.value = false;
      return false;
    }

    const response = await post({
      discussion: discussion.value.id,
      message: msg,
    });

    if (!response) {
      isPosting.value = false;
      return false;
    }

    await refresh();
    isPosting.value = false;
    return true;
  }

  async function postVote(type: "upvote" | "downvote", subjectId: string, isToggled: boolean): Promise<boolean> {
    if (isPosting.value) {
      return false;
    }

    isPosting.value = true;

    const response = await toggleVote({ type, subjectId, isToggled });
    if (!response) {
      isPosting.value = false;
      alert("Failed to upvote");
      return false;
    }

    await refresh();
    isPosting.value = false;
    return true;
  }

  const comments = computed(() => {
    if (!discussion.value) {
      return [];
    }

    const comments = discussion.value.comments.nodes.map((x) => {
      const upvote = x.reactionGroups.find((x) => x.content == "THUMBS_UP");
      const downvote = x.reactionGroups.find((x) => x.content == "THUMBS_DOWN");

      return {
        id: x.id,
        body: x.bodyHTML,
        createdAt: x.createdAt,
        createdAtHuman: Utility.formatHuman(x.createdAt),
        editedAt: x.lastEditedAt,
        author: x.author,
        upvotes: upvote ? upvote.users.totalCount : 0,
        downvotes: downvote ? downvote.users.totalCount : 0,
        didUpvote: upvote?.viewerHasReacted ? true : false,
        didDownvote: downvote?.viewerHasReacted ? true : false,
        url: x.url,
      };
    });

    comments.sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    return comments;
  });

  const links = computed(() => {
    if (!discussion.value) {
      return [];
    }

    const comments = discussion.value.comments.nodes.map((x) => {
      const upvote = x.reactionGroups.find((x) => x.content == "THUMBS_UP");
      const downvote = x.reactionGroups.find((x) => x.content == "THUMBS_DOWN");
      const links = Utility.getLinks(x.bodyHTML);
      const bodyText = x.bodyHTML.replace(/(<([^>]+)>)/gi, "");
      const isBodyExceeded = bodyText.length >= 128 ? true : false;

      return {
        id: x.id,
        body: `${bodyText.slice(0, isBodyExceeded ? 128 : bodyText.length)}${isBodyExceeded ? "..." : ""}`,
        createdAt: x.createdAt,
        createdAtHuman: Utility.formatHuman(x.createdAt),
        editedAt: x.lastEditedAt,
        author: x.author,
        upvotes: upvote ? upvote.users.totalCount : 0,
        downvotes: downvote ? downvote.users.totalCount : 0,
        didUpvote: upvote?.viewerHasReacted ? true : false,
        didDownvote: downvote?.viewerHasReacted ? true : false,
        url: x.url,
        link: links[0] ? links[0] : "#",
      };
    });

    comments.sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    return comments;
  });

  const isFailing = computed(() => {
    return didCommentsFailToLoad.value && !discussion.value;
  });

  return {
    comments,
    links,
    refresh,
    postMessage,
    postVote,
    isPosting,
    isRefreshing,
    isLoading,
    isFailing,
  };
}
