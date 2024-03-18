export const useConfig = () => {
  return {
    ENDPOINT: import.meta.env.VITE_ENDPOINT ?? "http://localhost:3000",
    STORAGE_KEY: import.meta.env.VITE_STORAGE_KEY ?? "github-comment-jwt",
    PREVIOUS_LINK_KEY: import.meta.env.VITE_PREVIOUS_LINK_KEY ?? "previous-link",
    REPO: import.meta.env.VITE_REPO ?? "stuyk/giscus-test",
    DISCUSSION_REFRESH_TIME: import.meta.env.VITE_DISCUSSION_REFRESH_TIME ?? 5000,
  };
};
