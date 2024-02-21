import * as GithubTypes from "../types/github/index";

export const GithubOAuth = Symbol("GITHUB_OAUTH_PROVIDER");
export const GithubUsername = Symbol("GITHUB_USERNAME");
export const GithubAvatar = Symbol("GITHUB_AVATAR");

export type IGithubOAuth = {
  setup(): void;
  logout(): void;
  isLoggedIn(): boolean;
  getLoginUri(): string;
  getRepo(): string;
  getDiscussion(data: GithubTypes.DiscussionRequest): Promise<GithubTypes.DiscussionResponse>;
  getCategory(data: GithubTypes.CategoryRequest): Promise<string>;
};
