export type DiscussionRequest = {
  /**
   * Title of the proposal we are going to create, or read from
   *
   * @type {string}
   */
  term: string;

  /**
   * Number of comments we should fetch
   *
   * @type {number}
   */
  count: number;

  /**
   * The repository `author/name` on GitHub
   *
   * @type {string}
   */
  repo?: string;

  /**
   * Where to begin reading comments from, leave this as `null` for first fetch
   *
   * @type {(string | null)}
   */
  cursor?: string | null;

  /**
   * Create a discussion automatically on fetch with the GitHub Application
   *
   * @type {boolean}
   */
  upsert?: boolean;

  /**
   * The category id where we should create discussions, or read a discussion from
   *
   * @type {string}
   */
  category?: string;
};

export type DiscussionCommentRequest = {
  /**
   * Title of the proposal we are going to create, or read from
   *
   * @type {string}
   */
  term: string;

  /**
   * The repository `author/name` on GitHub
   *
   * @type {string}
   */
  repo?: string;
};

export type CategoryRequest = {
  /**
   * The repository `author/name` on GitHub
   *
   * @type {string}
   */
  repo: string;

  /**
   * The name of the category to find
   *
   * @type {string}
   */
  name: string;
};

export type PostRequest = {
  /**
   * The message to send
   *
   * @type {string}
   */
  message: string;

  /**
   * The discussion id where we should post
   *
   * @type {string}
   */
  discussion: string;
};

export type UpvoteRequest = {
  /**
   * The ID of the message to upvote
   *
   * @type {string}
   */
  subjectId: string;

  /**
   * Has the user already upvoted?
   *
   * @type {boolean}
   */
  didUpvote: boolean;
};
