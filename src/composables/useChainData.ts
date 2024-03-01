import { useQuery } from "@vue/apollo-composable";
import proposalsQuery from "../graphql/proposals.graphql";
import proposalQuery from "../graphql/proposal.graphql";
import balanceQuery from "../graphql/balance.graphql";
import voteHistoryQuery from "../graphql/voteHistory.graphql";

export const useChainData = () => {
  const getBalance = (address: string) => {
    const { result } = useQuery(balanceQuery, { variables: { address } });
    return result;
  };
  const getProposals = () => {
    const { result } = useQuery(proposalsQuery, null, { pollInterval: 5000 });
    return result;
  };
  const getProposal = (proposal_id: number) => {
    const { result } = useQuery(proposalQuery, { variables: { id: proposal_id } }, { pollInterval: 5000 });
    return result;
  };
  const getVoteHistory = (address: string) => {
    const { result } = useQuery(voteHistoryQuery, { variables: { address } });
    return result;
  };
  return { getBalance, getProposals, getProposal, getVoteHistory };
};
