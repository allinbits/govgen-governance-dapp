import { ref, computed } from "vue";
import * as GithubTypes from "@/types/github/index";
import { useConfig } from "@/composables/useConfig";
import { useGithubDiscussions } from "@/composables/useGithubDiscussions";
import * as Utility from "@/utility/index";

type ParsedComment = {
  id: string;
  body: string;
  createdAt: Date;
  createdAtHuman: string;
  editedAt: null;
  author: GithubTypes.Author;
  upvotes: number;
  downvotes: number;
  didUpvote: boolean;
  didDownvote: boolean;
  url: string;
  link?: string;
};

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
  const ratio = ref(0);

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

    const comments: ParsedComment[] = [];
    for (const comment of discussion.value.comments.nodes) {
      const upvote = comment.reactionGroups.find((comment) => comment.content == "THUMBS_UP");
      const downvote = comment.reactionGroups.find((comment) => comment.content == "THUMBS_DOWN");
      const totalVotes =
        (upvote?.users.totalCount ? upvote.users.totalCount : 0) +
        (downvote?.users.totalCount ? downvote?.users.totalCount : 0);

      const voteRatio = totalVotes === 0 ? 0 : upvote?.users.totalCount ?? 0 / totalVotes;
      if (voteRatio < ratio.value) {
        continue;
      }

      comments.push({
        id: comment.id,
        body: comment.bodyHTML,
        createdAt: comment.createdAt,
        createdAtHuman: Utility.formatHuman(comment.createdAt),
        editedAt: comment.lastEditedAt,
        author: comment.author,
        upvotes: upvote ? upvote.users.totalCount : 0,
        downvotes: downvote ? downvote.users.totalCount : 0,
        didUpvote: upvote?.viewerHasReacted ? true : false,
        didDownvote: downvote?.viewerHasReacted ? true : false,
        url: comment.url,
      });
    }

    comments.sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    return comments;
  });

  const links = computed(() => {
    if (!discussion.value) {
      return [];
    }

    const links: ParsedComment[] = [];
    for (const comment of discussion.value.comments.nodes) {
      const upvote = comment.reactionGroups.find((comment) => comment.content == "THUMBS_UP");
      const downvote = comment.reactionGroups.find((comment) => comment.content == "THUMBS_DOWN");
      const totalVotes =
        (upvote?.users.totalCount ? upvote.users.totalCount : 0) +
        (downvote?.users.totalCount ? downvote?.users.totalCount : 0);

      const voteRatio = totalVotes === 0 ? 0 : upvote?.users.totalCount ?? 0 / totalVotes;
      if (voteRatio < ratio.value) {
        continue;
      }

      const commentLinks = Utility.getLinks(comment.bodyHTML);
      links.push({
        id: comment.id,
        body: comment.bodyHTML,
        createdAt: comment.createdAt,
        createdAtHuman: Utility.formatHuman(comment.createdAt),
        editedAt: comment.lastEditedAt,
        author: comment.author,
        upvotes: upvote ? upvote.users.totalCount : 0,
        downvotes: downvote ? downvote.users.totalCount : 0,
        didUpvote: upvote?.viewerHasReacted ? true : false,
        didDownvote: downvote?.viewerHasReacted ? true : false,
        url: comment.url,
        link: commentLinks[0] ? commentLinks[0] : "#",
      });
    }

    links.sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    return links;
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
    ratio,
  };
}
