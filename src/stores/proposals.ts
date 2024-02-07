import { makeAutoObservable } from "mobx";

export class ProposalsStore {
  proposals: unknown[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchProposals() {
    //Fetch proposals
    const props: unknown[] = [];
    this.setProposals(props);
  }
  setProposals(proposals: unknown[]) {
    this.proposals = proposals;
  }
}
