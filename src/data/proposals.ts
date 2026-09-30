import proposal01 from "@/assets/proposals/01.json";
import proposal02 from "@/assets/proposals/02.json";
import proposal03 from "@/assets/proposals/03.json";
import proposal04 from "@/assets/proposals/04.json";
import proposal05 from "@/assets/proposals/05.json";
import proposal06 from "@/assets/proposals/06.json";
import proposal07 from "@/assets/proposals/07.json";
import proposal08 from "@/assets/proposals/08.json";
import proposal09 from "@/assets/proposals/09.json";
import proposal10 from "@/assets/proposals/10.json";

export type StaticVote = {
  voter_address: string;
  option: string;
  weight: string;
  height: number;
};

export type StaticProposal = {
  id: number;
  title: string;
  description: string;
  content: Record<string, unknown>;
  proposal_route: string;
  proposal_type: string;
  proposal_votes: StaticVote[];
  proposer_address: string;
  status: string;
  submit_time: string;
  deposit_end_time: string;
  voting_end_time: string;
  voting_start_time: string;
  proposal_tally_results: Array<Record<string, string | number>>;
  proposal_deposits: Array<{
    amount: Array<{ denom: string; amount: string }>;
    depositor_address: string;
    proposal_id: number;
    timestamp: string;
  }>;
};

type ProposalSnapshot = { proposal: StaticProposal[] };

const snapshots = [
  proposal01,
  proposal02,
  proposal03,
  proposal04,
  proposal05,
  proposal06,
  proposal07,
  proposal08,
  proposal09,
  proposal10,
] as ProposalSnapshot[];

export const proposals = snapshots.map((snapshot) => snapshot.proposal[0]);

export const getStaticProposal = (id: number) => proposals.find((proposal) => proposal.id === id);
