import { createGlobalObservable, useLocalObservable } from "mobx-vue-lite";
import { ProposalsStore } from "./proposals";

const useProposalsStore = createGlobalObservable(() =>
  useLocalObservable(() => {
    return new ProposalsStore();
  }),
);
export { useProposalsStore };
