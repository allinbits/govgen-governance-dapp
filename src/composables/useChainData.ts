import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import proposalsQuery from "../graphql/proposals.graphql";
import balanceQuery from "../graphql/balance.graphql";

export const useChainData = () => {
  const getBalance = (address: string) => {
    const { result } = useQuery(balanceQuery, { variables: { address } });
    return result;
  };
  const getProposals = () => {
    const { result } = useQuery(proposalsQuery, null, { pollInterval: 5000 });
    return result;
  };
  const getProposal = (proposal_id: number) => {
    const { result } = useQuery(
      gql`
        query MyQuery {
          proposal(where: { id: { _eq: ${proposal_id} } }) {
            content
            deposit_end_time
            description
            proposal_route
            proposal_type
            proposal_votes {
              voter_address
              option
            }
            proposer_address
            status
            submit_time
            title
            voting_end_time
            voting_start_time
            proposal_tally_results {
              yes
              no_with_veto
              no
              abstain
            }
          }
        }
      `,
      null,
      { pollInterval: 5000 },
    );
    return result;
  };
  return { getBalance, getProposals, getProposal };
};
