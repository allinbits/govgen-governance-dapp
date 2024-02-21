export type DiscussionRequest = {
  term: string;
  repo: string;
  count: number;
  cursor?: string | null;
  upsert?: boolean;
  category?: string;
};

export type CategoryRequest = {
  repo: string;
  name: string;
};
