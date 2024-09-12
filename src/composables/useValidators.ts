import apolloClient from "@/apolloClient";
import { provideApolloClient } from "@vue/apollo-composable";
import { computed } from "vue";
import { useChainData } from "./useChainData";

const { getValset, getDelegatedAsync, getValidators } = useChainData();
export const useValidators = (height?: string) => {
  const validatorList = height ? getValset(height) : getValidators();
  const validators = computed(() => {
    if (validatorList.value) {
      return "proposal_validator_status_snapshots" in validatorList.value
        ? validatorList.value.proposal_validator_status_snapshots
        : validatorList.value.validator_statuses;
    } else {
      return [];
    }
  });
  const getVotingPower = async (address: string) => {
    provideApolloClient(apolloClient);
    // This should be adjusted to get the full delegated voting power on chains utilising the standard Cosmos SDK gov module
    const delegated = height ? await getDelegatedAsync(address, parseInt(height)) : await getDelegatedAsync(address);
    if (delegated && delegated.staked_balances && delegated.staked_balances.length > 0) {
      return delegated.staked_balances.reduce((total, stakedBalance) => {
        return total + parseInt(stakedBalance.amount.amount);
      }, 0);
    } else {
      return 0;
    }
  };
  return { validators, getVotingPower };
};
