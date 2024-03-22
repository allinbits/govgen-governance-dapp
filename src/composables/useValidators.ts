import { computed } from "vue";
import { useChainData } from "./useChainData";
import { provideApolloClient } from "@vue/apollo-composable";
import apolloClient from "@/apolloClient";

const { getValset, getDelegatedAsync, getValidators } = useChainData();
export const useValidators = (proposal_id: number, height?: string) => {
  const validatorList = height ? getValset(proposal_id, height) : getValidators();
  const validators = computed(() => {
    if (validatorList.value) {
      return "proposal_validator_status_snapshot" in validatorList.value
        ? validatorList.value.proposal_validator_status_snapshot
        : validatorList.value.validator_status;
    } else {
      return [];
    }
  });
  const getVotingPower = async (address: string) => {
    provideApolloClient(apolloClient);
    // This should be adjusted to get the full delegated voting power on chains utilising teh standard Cosmos SDK gov module
    const delegated = height ? await getDelegatedAsync(address, parseInt(height)) : await getDelegatedAsync(address);
    if (delegated && delegated.action_delegation_total && delegated.action_delegation_total.coins) {
      return parseInt(delegated.action_delegation_total.coins[0].amount);
    } else {
      return 0;
    }
  };
  return { validators, getVotingPower };
};
