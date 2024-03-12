export const useConfig = () => {
  return {
    ENDPOINT: import.meta.env.ENDPOINT ? import.meta.env.ENDPOINT : "http://localhost:3000",
    STORAGE_KEY: import.meta.env.STORAGE_KEY ? import.meta.env.STORAGE_KEY : "github-comment-jwt",
    PREVIOUS_LINK_KEY: import.meta.env.PREVIOUS_LINK_KEY ? import.meta.env.PREVIOUS_LINK_KEY : "previous-link",
    REPO: import.meta.env.REPO ? import.meta.env.REPO : "stuyk/giscus-test",
    DISCUSSION_REFRESH_TIME: import.meta.env.DISCUSSION_REFRESH_TIME ? import.meta.env.DISCUSSION_REFRESH_TIME : 5000,
  };
};
