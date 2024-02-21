import { Author, ReactionGroup, Replies } from "./githubDiscussionResponse";

export type CommentResponse = {
  data: {
    addDiscussionComment: {
      comment: Comment;
    };
  };
};

export type Comment = {
  id: string;
  upvoteCount: number;
  viewerHasUpvoted: boolean;
  viewerCanUpvote: boolean;
  author: Author;
  viewerDidAuthor: boolean;
  createdAt: Date;
  url: string;
  authorAssociation: string;
  lastEditedAt: null;
  deletedAt: null;
  isMinimized: boolean;
  bodyHTML: string;
  reactionGroups: ReactionGroup[];
  replies: Replies;
};

export type Users = {
  totalCount: number;
};
