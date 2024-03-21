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
  useLazyVotesQuery,
  useParamsQuery,
  useProposalQuery,
  useProposalTalliesQuery,
  useProposalsQuery,
  useStakingQuery,
  useValidatorsQuery,
  useValsetQuery,
  useVoteHistoryQuery,
  useVotesQuery,
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
  const getProposal = (id: number) => {
    const { result } = useProposalQuery({ id }, { pollInterval: 5000 });
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
  const getProposalTallies = (id: number) => {
    const { result } = useProposalTalliesQuery({ id }, { pollInterval: 5000 });
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
  const getValset = (proposalId: number, height: string) => {
    const { result } = useValsetQuery({ proposalId, height });
    return result;
  };
  const getValidators = () => {
    const { result } = useValidatorsQuery();
    return result;
  };
  const getVotes = (address: string, proposalId: number) => {
    const { result } = useVotesQuery({ address, proposalId });
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
  const getProposalAsync = async (id: number) => {
    const result = await useLazyProposalQuery({ id }, { pollInterval: 5000 }).load();
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
  const getProposalTalliesAsync = async (id: number) => {
    const result = await useLazyProposalTalliesQuery({ id }, { pollInterval: 5000 }).load();
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
  const getValsetAsync = async (proposalId: number, height: string) => {
    const result = await useLazyValsetQuery({ proposalId, height }).load();
    return result;
  };
  const getValidatorsAsync = async () => {
    const result = await useLazyValidatorsQuery().load();
    return result;
  };
  const getVotesAsync = (address: string, proposalId: number) => {
    const result = useLazyVotesQuery({ address, proposalId }).load();
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
    getVotes,
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
    getVotesAsync,
  };
};
