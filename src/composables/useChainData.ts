import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export const useChainData = () => {
  const getBalance = (address: string) => {
    const { result } = useQuery(gql`
      query Balance {
        action_account_balance(address: ${address}) {
          coins
        }
      }
    `);
    return result;
  };
  return { getBalance };
};
