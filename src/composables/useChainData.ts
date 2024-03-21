import {
  useBalanceQuery,
  useBlockHeightQuery,
  useDelegatedQuery,
  useLazyBalanceQuery,
  useLazyBlockHeightQuery,
  useLazyDelegatedQuery,
  useLazyParamsQuery,
  useLazyProposalQuery,
  useLazyProposalTalliesQuery,
  useLazyProposalsQuery,
  useLazyStakingQuery,
  useLazyValidatorsQuery,
  useLazyValsetQuery,
  useLazyVoteHistoryQuery,
  useParamsQuery,
  useProposalQuery,
  useProposalTalliesQuery,
  useProposalsQuery,
  useStakingQuery,
  useValidatorsQuery,
  useValsetQuery,
  useVoteHistoryQuery,
} from "@/composables/queries";

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
  const getBlockHeight = (timestamp: string) => {
    const { result } = useBlockHeightQuery({ timestamp });
    return result;
  };
  const getDelegated = (address: string, height?: number) => {
    const { result } = useDelegatedQuery({ address, height });
    return result;
  };
  const getValset = (proposal_id: number, height: string) => {
    const { result } = useValsetQuery({ proposalId: proposal_id, height });
    return result;
  };
  const getValidators = () => {
    const { result } = useValidatorsQuery();
    return result;
  };
  const getBalanceAsync = async (address: string) => {
    const result = await useLazyBalanceQuery({ address }).load();
    return result;
  };
  const getProposalsAsync = async () => {
    const result = await useLazyProposalsQuery({ pollInterval: 5000 }).load();
    return result;
  };
  const getProposalAsync = async (proposal_id: number) => {
    const result = await useLazyProposalQuery({ id: proposal_id }, { pollInterval: 5000 }).load();
    return result;
  };
  const getParamsAsync = async () => {
    const result = await useLazyParamsQuery().load();
    return result;
  };
  const getStakingStatusAsync = async () => {
    const result = await useLazyStakingQuery().load();
    return result;
  };
  const getVoteHistoryAsync = async (address: string) => {
    const result = await useLazyVoteHistoryQuery({ address }).load();
    return result;
  };
  const getProposalTalliesAsync = async (proposal_id: number) => {
    const result = await useLazyProposalTalliesQuery({ id: proposal_id }, { pollInterval: 5000 }).load();
    return result;
  };
  const getBlockHeightAsync = async (timestamp: string) => {
    const result = await useLazyBlockHeightQuery({ timestamp }).load();
    return result;
  };
  const getDelegatedAsync = async (address: string, height?: number) => {
    const result = await useLazyDelegatedQuery({ address, height }).load();
    return result;
  };
  const getValsetAsync = async (proposal_id: number, height: string) => {
    const result = await useLazyValsetQuery({ proposalId: proposal_id, height }).load();
    return result;
  };
  const getValidatorsAsync = async () => {
    const result = await useLazyValidatorsQuery().load();
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
    getBlockHeight,
    getDelegated,
    getValset,
    getValidators,
    getBalanceAsync,
    getProposalsAsync,
    getProposalAsync,
    getParamsAsync,
    getVoteHistoryAsync,
    getProposalTalliesAsync,
    getStakingStatusAsync,
    getBlockHeightAsync,
    getDelegatedAsync,
    getValsetAsync,
    getValidatorsAsync,
  };
};
