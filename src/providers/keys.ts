import { UserResponse } from "../types/comments";

export const GithubOAuth = Symbol("GITHUB_OAUTH_PROVIDER");
export const GithubUsername = Symbol("GITHUB_USERNAME");
export const GithubAvatar = Symbol("GITHUB_AVATAR");

export type IGithubOAuth = {
  setup(): void;
  logout(): void;
  isLoggedIn(): boolean;
  state: UserResponse | undefined;
};
