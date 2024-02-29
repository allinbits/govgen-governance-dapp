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
  const getProposals = () => {
    const { result } = useQuery(
      gql`
        query Proposals {
          deposit_proposals: proposal(
            where: { status: { _eq: "PROPOSAL_STATUS_DEPOSIT_PERIOD" }, proposal_deposits: {} }
          ) {
            content
            deposit_end_time
            description
            id
            proposal_type
            proposal_deposits {
              amount
              depositor_address
            }
            proposer_address
          }
          voting_proposals: proposal(where: { status: { _eq: "PROPOSAL_STATUS_VOTING_PERIOD" } }) {
            content
            deposit_end_time
            description
            id
            proposal_type
            proposal_deposits {
              amount
              depositor_address
            }
            proposer_address
          }
          all_proposals: proposal {
            content
            deposit_end_time
            description
            id
            proposal_type
            proposal_deposits {
              amount
              depositor_address
            }
            proposer_address
          }
        }
      `,
      null,
      { pollInterval: 5000 },
    );
    return result;
  };
  return { getBalance, getProposals };
};
