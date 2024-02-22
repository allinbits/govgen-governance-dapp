import * as GithubTypes from "../types/github/index";

export const GithubOAuth = Symbol("GITHUB_OAUTH_PROVIDER");
export const GithubUsername = Symbol("GITHUB_USERNAME");
export const GithubAvatar = Symbol("GITHUB_AVATAR");

export type OrUndefined<T> = T | undefined;

export type IGithubOAuth = {
  setup(): void;
  logout(): void;
  isLoggedIn(): boolean;
  getLoginUri(): string;
  getRepo(): string;
  getDiscussion(data: GithubTypes.DiscussionRequest): Promise<OrUndefined<GithubTypes.DiscussionResponse>>;
  getCategory(data: GithubTypes.CategoryRequest): Promise<OrUndefined<string>>;
  post(data: GithubTypes.PostRequest): Promise<OrUndefined<GithubTypes.CommentResponse>>;
  toggleUpvote(data: GithubTypes.UpvoteRequest): Promise<OrUndefined<GithubTypes.UpvoteResponse>>;
};
