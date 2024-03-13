import {
  useBalanceQuery,
  useProposalQuery,
  useProposalTalliesQuery,
  useProposalsQuery,
  useVoteHistoryQuery,
} from "./queries";

export const useChainData = () => {
  const getBalance = (address: string) => {
    const { result } = useBalanceQuery({ address });
    return result;
  };
  const getProposals = () => {
    const { result } = useProposalsQuery({ pollInterval: 5000 });
    return result;
  };
  const getProposal = (proposal_id: number) => {
    const { result } = useProposalQuery({ id: proposal_id }, { pollInterval: 5000 });
    return result;
  };
  const getVoteHistory = (address: string) => {
    const { result } = useVoteHistoryQuery({ address });
    return result;
  };
  const getProposalTallies = (proposal_id: number) => {
    const { result } = useProposalTalliesQuery({ id: proposal_id }, { pollInterval: 5000 });
    return result;
  };
  return { getBalance, getProposals, getProposal, getVoteHistory, getProposalTallies };
};
