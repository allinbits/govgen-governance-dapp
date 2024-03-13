import { ActionBalance, BalanceDocument, BalanceQuery, BalanceQueryVariables } from "@/gql/graphql";
import { useQuery } from "@vue/apollo-composable";
import { OptionsParameter } from "@vue/apollo-composable/dist/useQuery.js";

export const useBalanceQuery = (vars: BalanceQueryVariables, options: OptionsParameter<ActionBalance,{ variables: BalanceQueryVariables} >) => {
    return useQuery<BalanceQuery>(BalanceDocument,{ variables: vars},options)