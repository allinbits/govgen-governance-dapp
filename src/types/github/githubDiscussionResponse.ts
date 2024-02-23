export type DiscussionResponse = {
  id: string;
  url: string;
  locked: boolean;
  repository: Repository;
  reactions: Reactions;
  reactionGroups: ReactionGroup[];
  comments: Comments;
};

export type Comments = {
  totalCount: number;
  pageInfo: PageInfo;
  nodes: Node[];
};

export type Replies = {
  totalCount: number;
  nodes: Node[];
};

export type Node = {
  id: string;
  upvoteCount?: number;
  author: Author;
  viewerDidAuthor: boolean;
  createdAt: Date;
  url: string;
  authorAssociation: string;
  lastEditedAt: null;
  deletedAt: null;
  bodyHTML: string;
  reactionGroups: ReactionGroup[];
  replies?: Replies;
  replyTo?: ReplyTo;
};

export type Author = {
  avatarUrl: string;
  login: string;
  url: string;
};

export type ReactionGroup = {
  content: string;
  users: Reactions;
  viewerHasReacted: boolean;
};

export type Reactions = {
  totalCount: number;
};

export type ReplyTo = {
  id: string;
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
