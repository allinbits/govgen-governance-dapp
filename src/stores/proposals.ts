import { makeAutoObservable } from "mobx";

export class ProposalsStore {
  proposals = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchProposals() {
    //Fetch proposals
    const props = [];
    this.setProposals(props);
  }
  setProposals(proposals) {
    this.proposals = proposals;
  }
}
