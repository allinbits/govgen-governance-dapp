import {
  BalanceDocument,
  BalanceQuery,
  BalanceQueryVariables,
  BlockHeightDocument,
  BlockHeightQuery,
  BlockHeightQueryVariables,
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
  ProposalTallyProgressDocument,
  ProposalTallyProgressQuery,
  ProposalTallyProgressQueryVariables,
  ProposalsDocument,
  ProposalsQuery,
  ProposalsQueryVariables,
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

export const useProposalsQuery = (options?: UseQueryOptions<ProposalsQuery, ProposalsQueryVariables>) => {
  return useQuery<ProposalsQuery, ProposalsQueryVariables>(ProposalsDocument, {}, options ?? {});
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
export const useProposalTallyProgressQuery = (
  variables: ProposalTallyProgressQueryVariables,
  options?: UseQueryOptions<ProposalTallyProgressQuery, ProposalTallyProgressQueryVariables>,
) => {
  return useQuery<ProposalTallyProgressQuery, ProposalTallyProgressQueryVariables>(
    ProposalTallyProgressDocument,
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

export const useLazyProposalsQuery = (options?: UseQueryOptions<ProposalsQuery, ProposalsQueryVariables>) => {
  return useLazyQuery<ProposalsQuery, ProposalsQueryVariables>(ProposalsDocument, {}, options ?? {});
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

export const useLazyProposalTallyProgressQuery = (
  variables: ProposalTallyProgressQueryVariables,
  options?: UseQueryOptions<ProposalTallyProgressQuery, ProposalTallyProgressQueryVariables>,
) => {
  return useLazyQuery<ProposalTallyProgressQuery, ProposalTallyProgressQueryVariables>(
    ProposalTallyProgressDocument,
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
