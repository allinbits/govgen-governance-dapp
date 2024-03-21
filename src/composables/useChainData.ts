import {
  useBalanceQuery,
  useBlockHeightQuery,
  useDelegatedQuery,
  useParamsQuery,
  useProposalQuery,
  useProposalTalliesQuery,
  useProposalsQuery,
  useStakingQuery,
  useValidatorsQuery,
  useVoteHistoryQuery,
} from "@/composables/queries";

export const useChainData = () => {
  const getBalance = (address: string) => {
    const { result } = useBalanceQuery({ address });
    return result;
  };
  const getBlockHeight = (timestamp: string) => {
    const { result } = useBlockHeightQuery({ timestamp });
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
  const getParams = () => {
    const { result } = useParamsQuery();
    return result;
  };
  const getStakingStatus = () => {
    const { result } = useStakingQuery();
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
  const getValidators = () => {
    const { result } = useValidatorsQuery();
    return result;
  };
  const getDelegated = (address: string) => {
    const { result } = useDelegatedQuery({ address });
    return result;
  };
  return {
    getBalance,
    getProposals,
    getProposal,
    getParams,
    getVoteHistory,
    getProposalTallies,
    getStakingStatus,
    getValidators,
    getDelegated,
    getBlockHeight,
  };
};
