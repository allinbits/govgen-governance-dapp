export type UpvoteResponse = {
  data: {
    toggleReaction: {
      reaction: Reaction;
    };
  };
};

export type Reaction = {
  content: string;
  id: string;
};
