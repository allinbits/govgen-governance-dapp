import { ref } from "vue";
import { getStaticProposal, proposals as staticProposals } from "@/data/proposals";
import {
  useAllVotesQuery,
  useBalanceQuery,
  useBlockHeightQuery,
  useBlockTimeQuery,
  useDelegatedQuery,
  useLazyBalanceQuery,
  useLazyBlockHeightQuery,
  useLazyBlockTimeQuery,
  useLazyDelegatedQuery,
  useLazyParamsQuery,
  useLazyProposalQuery,
  useLazyProposalTalliesQuery,
  useLazyProposalsActiveQuery,
  useLazyProposalsFailedQuery,
  useLazyProposalsPassedQuery,
  useLazyProposalsRejectedQuery,
  useLazyProposalsSearchQuery,
  useLazyStakingQuery,
  useLazyValidatorsQuery,
  useLazyValsetQuery,
  useLazyVoteHistoryQuery,
  useLazyVotesQuery,
  useParamsQuery,
  useProposalQuery,
  useProposalTalliesQuery,
  useProposalsActiveQuery,
  useProposalsSearchQuery,
  useStakingQuery,
  useValidatorsQuery,
  useValsetQuery,
  useVoteHistoryQuery,
  useVoteOptionQuery,
  useVotesQuery,
} from "@/composables/queries";

export const useChainData = () => {
  const getBalance = (address: string) => {
    const { result } = useBalanceQuery({ address });
    return result;
  };

  const searchProposals = async (searchString: string, limit: number, offset: number) => {
    return useProposalsSearchQuery({
      limit,
      offset,
      searchString,
    }).result;
  };
  const getProposals = (
    order: "active" | "passed" | "rejected" | "failed" = "active",
    limit: number,
    offset: number,
    status?: string,
    searchString?: string,
  ) => {
    void order;
    const filtered = staticProposals.filter(
      (proposal) =>
        (!status || proposal.status === status) &&
        (!searchString ||
          `${proposal.title} ${proposal.description}`.toLowerCase().includes(searchString.toLowerCase())),
    );
    return ref({
      all_proposals: filtered.slice(offset, offset + limit),
      proposal_aggregate: { aggregate: { count: filtered.length } },
    }) as unknown as ReturnType<typeof useProposalsActiveQuery>["result"];
    /* let where;
    if (status) {
      if (searchString) {
        where = {
          _and: [
            { status: { _eq: status } },
            { _or: [{ title: { _ilike: `%${searchString}%` } }, { description: { _ilike: `%${searchString}%` } }] },
          ],
        };
      } else {
        where = { status: { _eq: status } };
      }
    } else {
      if (searchString) {
        where = {
          _and: [
            { status: { _neq: "PROPOSAL_STATUS_INVALID" } },
            { _or: [{ title: { _ilike: `%${searchString}%` } }, { description: { _ilike: `%${searchString}%` } }] },
          ],
        };
      } else {
        where = { status: { _neq: "PROPOSAL_STATUS_INVALID" } };
      }
    }
    switch (order) {
      case "passed":
        return useProposalsPassedQuery({
          limit,
          offset,
          where,
        }).result;
      case "rejected":
        return useProposalsRejectedQuery({
          limit,
          offset,
          where,
        }).result;
      case "failed":
        return useProposalsFailedQuery({
          limit,
          offset,
          where,
        }).result;
      case "active":
      default:
        return useProposalsActiveQuery({
          limit,
          offset,
          where,
        }).result;
    }
    */
  };
  const getProposal = (id: number) => {
    return ref({ proposal: getStaticProposal(id) ? [getStaticProposal(id)] : [] }) as unknown as ReturnType<
      typeof useProposalQuery
    >["result"];
  };
  const getParams = () => {
    return ref({
      gov_params: [
        {
          deposit_params: { min_deposit: [{ amount: "5000000000", denom: "ugovgen" }] },
          tally_params: {
            quorum: "0.334000000000000000",
            threshold: "0.500000000000000000",
            veto_threshold: "0.334000000000000000",
          },
        },
      ],
    }) as unknown as ReturnType<typeof useParamsQuery>["result"];
  };
  const getStakingStatus = () => {
    return ref({ staking_pool: [{ bonded_tokens: "1000000000000" }] }) as unknown as ReturnType<
      typeof useStakingQuery
    >["result"];
  };
  const getVoteHistory = (address: string) => {
    const { result } = useVoteHistoryQuery({ address });
    return result;
  };
  const getProposalTallies = (id: number) => {
    return ref({ proposal_tally_result: getStaticProposal(id)?.proposal_tally_results ?? [] }) as unknown as ReturnType<
      typeof useProposalTalliesQuery
    >["result"];
  };
  const getBlockHeight = (timestamp: string) => {
    const { result } = useBlockHeightQuery({ timestamp });
    return result;
  };
  const getBlockTime = (height: number) => {
    const { result } = useBlockTimeQuery({ height });
    return result;
  };
  const getDelegated = (address: string, height?: number) => {
    if (height) {
      const where = { _and: [{ height: { _lte: height } }, { delegator: { _eq: address } }] };
      const { result } = useDelegatedQuery({ where });

      return result;
    } else {
      const where = { delegator: { _eq: address } };
      const { result } = useDelegatedQuery({ where });

      return result;
    }
  };
  const getValset = (height: string) => {
    const { result } = useValsetQuery({ height });
    return result;
  };
  const getValidators = () => {
    return ref({ block: [{ validator_statuses: [] }] }) as unknown as ReturnType<typeof useValidatorsQuery>["result"];
  };
  const getVotes = (address: string, proposalId: number) => {
    const proposal = getStaticProposal(proposalId);
    return ref({
      proposal_vote: proposal?.proposal_votes.filter((vote) => vote.voter_address === address) ?? [],
    }) as unknown as ReturnType<typeof useVotesQuery>["result"];
  };
  const getAllVotes = (proposalId: number, limit: number, offset: number) => {
    return ref({
      proposal_vote: getStaticProposal(proposalId)?.proposal_votes.slice(offset, offset + limit) ?? [],
      proposal_vote_aggregate: { aggregate: { count: getStaticProposal(proposalId)?.proposal_votes.length ?? 0 } },
    }) as unknown as ReturnType<typeof useAllVotesQuery>["result"];
  };
  const getVoteOption = (proposalId: number, option: string) => {
    return ref({
      proposal_vote_aggregate: {
        aggregate: {
          count: getStaticProposal(proposalId)?.proposal_votes.filter((vote) => vote.option === option).length ?? 0,
        },
      },
    }) as unknown as ReturnType<typeof useVoteOptionQuery>["result"];
  };
  const getBalanceAsync = async (address: string) => {
    const result = await useLazyBalanceQuery({ address }).load();
    return result;
  };
  const searchProposalsAsync = async (searchString: string, limit: number, offset: number) => {
    return await useLazyProposalsSearchQuery({
      limit,
      offset,
      searchString,
    }).load();
  };
  const getProposalsAsync = async (
    order: "active" | "passed" | "rejected" | "failed" = "active",
    limit: number,
    offset: number,
    status?: string,
    searchString?: string,
  ) => {
    let where;
    if (status) {
      if (searchString) {
        where = {
          _and: [
            { status: { _eq: status } },
            { _or: [{ title: { _ilike: `%${searchString}%` } }, { description: { _ilike: `%${searchString}%` } }] },
          ],
        };
      } else {
        where = { status: { _eq: status } };
      }
    } else {
      if (searchString) {
        where = {
          _and: [
            { status: { _neq: "PROPOSAL_STATUS_INVALID" } },
            { _or: [{ title: { _ilike: `%${searchString}%` } }, { description: { _ilike: `%${searchString}%` } }] },
          ],
        };
      } else {
        where = { status: { _neq: "PROPOSAL_STATUS_INVALID" } };
      }
    }
    switch (order) {
      case "passed":
        return await useLazyProposalsPassedQuery({
          limit,
          offset,
          where,
        }).load();
      case "rejected":
        return await useLazyProposalsRejectedQuery({
          limit,
          offset,
          where,
        }).load();
      case "failed":
        return await useLazyProposalsFailedQuery({
          limit,
          offset,
          where,
        }).load();
      case "active":
      default:
        return await useLazyProposalsActiveQuery({
          limit,
          offset,
          where,
        }).load();
    }
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

  const getBlockTimeAsync = async (height: number) => {
    const result = useLazyBlockTimeQuery({ height }).load();
    return result;
  };
  const getDelegatedAsync = async (address: string, height?: number) => {
    if (height) {
      const where = { _and: [{ height: { _lte: height } }, { delegator: { _eq: address } }] };
      const result = useLazyDelegatedQuery({ where }).load();

      return result;
    } else {
      const where = { delegator: { _eq: address } };
      const result = useLazyDelegatedQuery({ where }).load();

      return result;
    }
  };
  const getValsetAsync = async (height: string) => {
    const result = await useLazyValsetQuery({ height }).load();
    return result;
  };
  const getValidatorsAsync = async () => {
    const result = await useLazyValidatorsQuery().load();
    return result;
  };
  const getVotesAsync = async (address: string, proposalId: number) => {
    const result = await useLazyVotesQuery({ address, proposalId, propId: String(proposalId) }).load();
    return result;
  };

  const getAllVotesAsync = async (proposalId: number, limit: number, offset: number) => {
    return getAllVotes(proposalId, limit, offset).value;
  };
  const getVoteOptionAsync = async (proposalId: number, option: string) => {
    return getVoteOption(proposalId, option).value;
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
    getBlockTime,
    getDelegated,
    getValset,
    getValidators,
    getVotes,
    getAllVotes,
    getVoteOption,
    getBalanceAsync,
    getProposalsAsync,
    getProposalAsync,
    getParamsAsync,
    getVoteHistoryAsync,
    getProposalTalliesAsync,
    getStakingStatusAsync,
    getBlockHeightAsync,
    getBlockTimeAsync,
    getDelegatedAsync,
    getValsetAsync,
    getValidatorsAsync,
    getVotesAsync,
    getAllVotesAsync,
    getVoteOptionAsync,
    searchProposals,
    searchProposalsAsync,
  };
};
