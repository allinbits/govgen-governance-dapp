import {
  BalanceDocument,
  BalanceQuery,
  BalanceQueryVariables,
  ProposalDocument,
  ProposalQuery,
  ProposalQueryVariables,
  ProposalTalliesDocument,
  ProposalTalliesQuery,
  ProposalTalliesQueryVariables,
  ProposalsDocument,
  ProposalsQuery,
  ProposalsQueryVariables,
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

export const useProposalQuery = (
  variables: ProposalQueryVariables,
  options?: UseQueryOptions<ProposalQuery, ProposalQueryVariables>,
) => {
  return useQuery<ProposalQuery, ProposalQueryVariables>(ProposalDocument, variables, options ?? {});
};

export const useProposalsQuery = (options?: UseQueryOptions<ProposalsQuery, ProposalsQueryVariables>) => {
  return useQuery<ProposalsQuery, ProposalsQueryVariables>(ProposalsDocument, {}, options ?? {});
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
