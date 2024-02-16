export type DiscussionResponse = {
  viewer: Viewer;
  discussion: Discussion;
};

export type Discussion = {
  totalCommentCount: number;
  totalReplyCount: number;
  pageInfo: PageInfo;
  reactionCount: number;
  reactions: Reactions;
  comments: Comment[];
  id: string;
  url: string;
  locked: boolean;
  repository: Repository;
};

export type Comment = {
  id: string;
  upvoteCount: number;
  viewerHasUpvoted: boolean;
  viewerCanUpvote: boolean;
  viewerDidAuthor: boolean;
  createdAt: Date;
  url: string;
  authorAssociation: string;
  lastEditedAt: null;
  deletedAt: null;
  isMinimized: boolean;
  bodyHTML: string;
  author: Viewer;
  replyCount: number;
  reactions: Reactions;
  replies: Reply[];
};

export type Viewer = {
  avatarUrl: string;
  login: string;
  url: string;
};

export type Reactions = {
  THUMBS_UP: Confused;
  THUMBS_DOWN: Confused;
  LAUGH: Confused;
  HOORAY: Confused;
  CONFUSED: Confused;
  HEART: Confused;
  ROCKET: Confused;
  EYES: Confused;
};

export type Confused = {
  count: number;
  viewerHasReacted: boolean;
};

export type Reply = {
  id: string;
  viewerDidAuthor: boolean;
  createdAt: Date;
  url: string;
  authorAssociation: string;
  lastEditedAt: null;
  deletedAt: null;
  isMinimized: boolean;
  bodyHTML: string;
  author: Viewer;
  reactions: Reactions;
  replyToId: string;
};

export type PageInfo = {
  startCursor: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  endCursor: string;
};

export type Repository = {
  nameWithOwner: string;
};
