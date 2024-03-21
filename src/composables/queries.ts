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
  ProposalsDocument,
  ProposalsQuery,
  ProposalsQueryVariables,
  StakingDocument,
  StakingQuery,
  StakingQueryVariables,
  ValidatorsDocument,
  ValidatorsQuery,
  ValidatorsQueryVariables,
  VoteHistoryDocument,
  VoteHistoryQuery,
  VoteHistoryQueryVariables,
} from "@/gql/graphql";
import { useQuery } from "@vue/apollo-composable";
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

export const useValidatorsQuery = (options?: UseQueryOptions<ValidatorsQuery, ValidatorsQueryVariables>) => {
  return useQuery<ValidatorsQuery, ValidatorsQueryVariables>(ValidatorsDocument, {}, options ?? {});
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
