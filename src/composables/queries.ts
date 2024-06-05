import {
  AllVotesDocument,
  AllVotesQuery,
  AllVotesQueryVariables,
  BalanceDocument,
  BalanceQuery,
  BalanceQueryVariables,
  BlockHeightDocument,
  BlockHeightQuery,
  BlockHeightQueryVariables,
  BlockTimeDocument,
  BlockTimeQuery,
  BlockTimeQueryVariables,
  DelegatedDocument,
  DelegatedQuery,
  DelegatedQueryVariables,
  ParamsDocument,
  ParamsQuery,
  ParamsQueryVariables,
  ProposalDocument,
  ProposalQuery,
  ProposalQueryVariables,
  ProposalTalliesDocument,
  ProposalTalliesQuery,
  ProposalTalliesQueryVariables,
  ProposalsActiveDocument,
  ProposalsActiveQuery,
  ProposalsActiveQueryVariables,
  ProposalsFailedDocument,
  ProposalsFailedQuery,
  ProposalsFailedQueryVariables,
  ProposalsPassedDocument,
  ProposalsPassedQuery,
  ProposalsPassedQueryVariables,
  ProposalsRejectedDocument,
  ProposalsRejectedQuery,
  ProposalsRejectedQueryVariables,
  ProposalsSearchDocument,
  ProposalsSearchQuery,
  ProposalsSearchQueryVariables,
  StakingDocument,
  StakingQuery,
  StakingQueryVariables,
  ValSetDocument,
  ValSetQuery,
  ValSetQueryVariables,
  ValidatorsDocument,
  ValidatorsQuery,
  ValidatorsQueryVariables,
  VoteHistoryDocument,
  VoteHistoryQuery,
  VoteHistoryQueryVariables,
  VoteOptionDocument,
  VoteOptionQuery,
  VoteOptionQueryVariables,
  VotesDocument,
  VotesQuery,
  VotesQueryVariables,
} from "@/gql/graphql";
import { useLazyQuery, useQuery } from "@vue/apollo-composable";
import { UseQueryOptions } from "@vue/apollo-composable/dist/useQuery.js";

export const useBalanceQuery = (
  variables: BalanceQueryVariables,
  options?: UseQueryOptions<BalanceQuery, BalanceQueryVariables>,
) => {
  return useQuery<BalanceQuery, BalanceQueryVariables>(BalanceDocument, variables, options ?? {});
};

export const useBlockHeightQuery = (
  variables: BlockHeightQueryVariables,
  options?: UseQueryOptions<BlockHeightQuery, BlockHeightQueryVariables>,
) => {
  return useQuery<BlockHeightQuery, BlockHeightQueryVariables>(BlockHeightDocument, variables, options ?? {});
};
export const useBlockTimeQuery = (
  variables: BlockTimeQueryVariables,
  options?: UseQueryOptions<BlockTimeQuery, BlockTimeQueryVariables>,
) => {
  return useQuery<BlockTimeQuery, BlockTimeQueryVariables>(BlockTimeDocument, variables, options ?? {});
};
export const useDelegatedQuery = (
  variables: DelegatedQueryVariables,
  options?: UseQueryOptions<DelegatedQuery, DelegatedQueryVariables>,
) => {
  return useQuery<DelegatedQuery, DelegatedQueryVariables>(DelegatedDocument, variables, options ?? {});
};
export const useValsetQuery = (
  variables: ValSetQueryVariables,
  options?: UseQueryOptions<ValSetQuery, ValSetQueryVariables>,
) => {
  return useQuery<ValSetQuery, ValSetQueryVariables>(ValSetDocument, variables, options ?? {});
};
export const useProposalQuery = (
  variables: ProposalQueryVariables,
  options?: UseQueryOptions<ProposalQuery, ProposalQueryVariables>,
) => {
  return useQuery<ProposalQuery, ProposalQueryVariables>(ProposalDocument, variables, options ?? {});
};

export const useProposalsActiveQuery = (
  variables: ProposalsActiveQueryVariables,
  options?: UseQueryOptions<ProposalsActiveQuery, ProposalsActiveQueryVariables>,
) => {
  return useQuery<ProposalsActiveQuery, ProposalsActiveQueryVariables>(
    ProposalsActiveDocument,
    variables,
    options ?? {},
  );
};

export const useProposalsSearchQuery = (
  variables: ProposalsSearchQueryVariables,
  options?: UseQueryOptions<ProposalsSearchQuery, ProposalsSearchQueryVariables>,
) => {
  return useQuery<ProposalsSearchQuery, ProposalsSearchQueryVariables>(
    ProposalsSearchDocument,
    variables,
    options ?? {},
  );
};
export const useProposalsFailedQuery = (
  variables: ProposalsFailedQueryVariables,
  options?: UseQueryOptions<ProposalsFailedQuery, ProposalsFailedQueryVariables>,
) => {
  return useQuery<ProposalsFailedQuery, ProposalsFailedQueryVariables>(
    ProposalsFailedDocument,
    variables,
    options ?? {},
  );
};
export const useProposalsPassedQuery = (
  variables: ProposalsPassedQueryVariables,
  options?: UseQueryOptions<ProposalsPassedQuery, ProposalsPassedQueryVariables>,
) => {
  return useQuery<ProposalsPassedQuery, ProposalsPassedQueryVariables>(
    ProposalsPassedDocument,
    variables,
    options ?? {},
  );
};
export const useProposalsRejectedQuery = (
  variables: ProposalsRejectedQueryVariables,
  options?: UseQueryOptions<ProposalsRejectedQuery, ProposalsRejectedQueryVariables>,
) => {
  return useQuery<ProposalsRejectedQuery, ProposalsRejectedQueryVariables>(
    ProposalsRejectedDocument,
    variables,
    options ?? {},
  );
};
export const useParamsQuery = (options?: UseQueryOptions<ParamsQuery, ParamsQueryVariables>) => {
  return useQuery<ParamsQuery, ParamsQueryVariables>(ParamsDocument, {}, options ?? {});
};

export const useStakingQuery = (options?: UseQueryOptions<StakingQuery, StakingQueryVariables>) => {
  return useQuery<StakingQuery, StakingQueryVariables>(StakingDocument, {}, options ?? {});
};

export const useVoteHistoryQuery = (
  variables: VoteHistoryQueryVariables,
  options?: UseQueryOptions<VoteHistoryQuery, VoteHistoryQueryVariables>,
) => {
  return useQuery<VoteHistoryQuery, VoteHistoryQueryVariables>(VoteHistoryDocument, variables, options ?? {});
};

export const useValidatorsQuery = (options?: UseQueryOptions<ValidatorsQuery, ValidatorsQueryVariables>) => {
  return useQuery<ValidatorsQuery, ValidatorsQueryVariables>(ValidatorsDocument, {}, options ?? {});
};
export const useProposalTalliesQuery = (
  variables: ProposalTalliesQueryVariables,
  options?: UseQueryOptions<ProposalTalliesQuery, ProposalTalliesQueryVariables>,
) => {
  return useQuery<ProposalTalliesQuery, ProposalTalliesQueryVariables>(
    ProposalTalliesDocument,
    variables,
    options ?? {},
  );
};
export const useVotesQuery = (
  variables: VotesQueryVariables,
  options?: UseQueryOptions<VotesQuery, VotesQueryVariables>,
) => {
  return useQuery<VotesQuery, VotesQueryVariables>(VotesDocument, variables, options ?? {});
};
export const useAllVotesQuery = (
  variables: AllVotesQueryVariables,
  options?: UseQueryOptions<AllVotesQuery, AllVotesQueryVariables>,
) => {
  return useQuery<AllVotesQuery, AllVotesQueryVariables>(AllVotesDocument, variables, options ?? {});
};
export const useVoteOptionQuery = (
  variables: VoteOptionQueryVariables,
  options?: UseQueryOptions<VoteOptionQuery, VoteOptionQueryVariables>,
) => {
  return useQuery<VoteOptionQuery, VoteOptionQueryVariables>(VoteOptionDocument, variables, options ?? {});
};
export const useLazyBalanceQuery = (
  variables: BalanceQueryVariables,
  options?: UseQueryOptions<BalanceQuery, BalanceQueryVariables>,
) => {
  return useLazyQuery<BalanceQuery, BalanceQueryVariables>(BalanceDocument, variables, options ?? {});
};

export const useLazyBlockHeightQuery = (
  variables: BlockHeightQueryVariables,
  options?: UseQueryOptions<BlockHeightQuery, BlockHeightQueryVariables>,
) => {
  return useLazyQuery<BlockHeightQuery, BlockHeightQueryVariables>(BlockHeightDocument, variables, options ?? {});
};

export const useLazyBlockTimeQuery = (
  variables: BlockTimeQueryVariables,
  options?: UseQueryOptions<BlockTimeQuery, BlockTimeQueryVariables>,
) => {
  return useLazyQuery<BlockTimeQuery, BlockTimeQueryVariables>(BlockTimeDocument, variables, options ?? {});
};
export const useLazyDelegatedQuery = (
  variables: DelegatedQueryVariables,
  options?: UseQueryOptions<DelegatedQuery, DelegatedQueryVariables>,
) => {
  return useLazyQuery<DelegatedQuery, DelegatedQueryVariables>(DelegatedDocument, variables, options ?? {});
};
export const useLazyValsetQuery = (
  variables: ValSetQueryVariables,
  options?: UseQueryOptions<ValSetQuery, ValSetQueryVariables>,
) => {
  return useLazyQuery<ValSetQuery, ValSetQueryVariables>(ValSetDocument, variables, options ?? {});
};
export const useLazyProposalQuery = (
  variables: ProposalQueryVariables,
  options?: UseQueryOptions<ProposalQuery, ProposalQueryVariables>,
) => {
  return useLazyQuery<ProposalQuery, ProposalQueryVariables>(ProposalDocument, variables, options ?? {});
};

export const useLazyProposalsActiveQuery = (
  variables: ProposalsActiveQueryVariables,
  options?: UseQueryOptions<ProposalsActiveQuery, ProposalsActiveQueryVariables>,
) => {
  return useLazyQuery<ProposalsActiveQuery, ProposalsActiveQueryVariables>(
    ProposalsActiveDocument,
    variables,
    options ?? {},
  );
};

export const useLazyProposalsSearchQuery = (
  variables: ProposalsSearchQueryVariables,
  options?: UseQueryOptions<ProposalsSearchQuery, ProposalsSearchQueryVariables>,
) => {
  return useLazyQuery<ProposalsSearchQuery, ProposalsSearchQueryVariables>(
    ProposalsSearchDocument,
    variables,
    options ?? {},
  );
};
export const useLazyProposalsFailedQuery = (
  variables: ProposalsFailedQueryVariables,
  options?: UseQueryOptions<ProposalsFailedQuery, ProposalsFailedQueryVariables>,
) => {
  return useLazyQuery<ProposalsFailedQuery, ProposalsFailedQueryVariables>(
    ProposalsFailedDocument,
    variables,
    options ?? {},
  );
};
export const useLazyProposalsPassedQuery = (
  variables: ProposalsPassedQueryVariables,
  options?: UseQueryOptions<ProposalsPassedQuery, ProposalsPassedQueryVariables>,
) => {
  return useLazyQuery<ProposalsPassedQuery, ProposalsPassedQueryVariables>(
    ProposalsPassedDocument,
    variables,
    options ?? {},
  );
};
export const useLazyProposalsRejectedQuery = (
  variables: ProposalsRejectedQueryVariables,
  options?: UseQueryOptions<ProposalsRejectedQuery, ProposalsRejectedQueryVariables>,
) => {
  return useLazyQuery<ProposalsRejectedQuery, ProposalsRejectedQueryVariables>(
    ProposalsRejectedDocument,
    variables,
    options ?? {},
  );
};

export const useLazyParamsQuery = (options?: UseQueryOptions<ParamsQuery, ParamsQueryVariables>) => {
  return useLazyQuery<ParamsQuery, ParamsQueryVariables>(ParamsDocument, {}, options ?? {});
};

export const useLazyStakingQuery = (options?: UseQueryOptions<StakingQuery, StakingQueryVariables>) => {
  return useLazyQuery<StakingQuery, StakingQueryVariables>(StakingDocument, {}, options ?? {});
};

export const useLazyVoteHistoryQuery = (
  variables: VoteHistoryQueryVariables,
  options?: UseQueryOptions<VoteHistoryQuery, VoteHistoryQueryVariables>,
) => {
  return useLazyQuery<VoteHistoryQuery, VoteHistoryQueryVariables>(VoteHistoryDocument, variables, options ?? {});
};

export const useLazyValidatorsQuery = (options?: UseQueryOptions<ValidatorsQuery, ValidatorsQueryVariables>) => {
  return useLazyQuery<ValidatorsQuery, ValidatorsQueryVariables>(ValidatorsDocument, {}, options ?? {});
};
export const useLazyProposalTalliesQuery = (
  variables: ProposalTalliesQueryVariables,
  options?: UseQueryOptions<ProposalTalliesQuery, ProposalTalliesQueryVariables>,
) => {
  return useLazyQuery<ProposalTalliesQuery, ProposalTalliesQueryVariables>(
    ProposalTalliesDocument,
    variables,
    options ?? {},
  );
};

export const useLazyVotesQuery = (
  variables: VotesQueryVariables,
  options?: UseQueryOptions<VotesQuery, VotesQueryVariables>,
) => {
  return useLazyQuery<VotesQuery, VotesQueryVariables>(VotesDocument, variables, options ?? {});
};

export const useLazyAllVotesQuery = (
  variables: AllVotesQueryVariables,
  options?: UseQueryOptions<AllVotesQuery, AllVotesQueryVariables>,
) => {
  return useLazyQuery<AllVotesQuery, AllVotesQueryVariables>(AllVotesDocument, variables, options ?? {});
};
export const useLazyVoteOptionQuery = (
  variables: VoteOptionQueryVariables,
  options?: UseQueryOptions<VoteOptionQuery, VoteOptionQueryVariables>,
) => {
  return useLazyQuery<VoteOptionQuery, VoteOptionQueryVariables>(VoteOptionDocument, variables, options ?? {});
};
