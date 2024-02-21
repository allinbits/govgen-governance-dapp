export type CategoriesResponse = {
  data: Data;
};

export type Data = {
  search: Search;
};

export type Search = {
  nodes: SearchNode[];
};

export type SearchNode = {
  id: string;
  discussionCategories: DiscussionCategories;
};

export type DiscussionCategories = {
  nodes: DiscussionCategoriesNode[];
};

export type DiscussionCategoriesNode = {
  id: string;
  name: string;
  emojiHTML: string;
};
