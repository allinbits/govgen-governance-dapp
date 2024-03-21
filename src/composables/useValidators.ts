import { computed } from "vue";
import { useChainData } from "./useChainData";
import { provideApolloClient } from "@vue/apollo-composable";
import apolloClient from "@/apolloClient";

const { getValidators, getDelegated } = useChainData();
export const useValidators = (height: number) => {
  const validatorList = height == 0 ? getValidators() : getValidatorsAtHeight(height);
  const validators = computed(() => {
    return validatorList.value?.validator ?? [];
  });
  const getVotingPower = (address: string) => {
    provideApolloClient(apolloClient);
    // This should be adjusted to get the full delegated voting power on chains utilising teh standard Cosmos SDK gov module
    const delegated = height == 0 ? getDelegated(address) : getDelegatedAtHeight(height);
    const vp = computed(() => {
      if (delegated.value?.action_delegation_total?.coins) {
        return parseInt(delegated.value?.action_delegation_total?.coins[0].amount);
      } else {
        return 0;
      }
    });
    return vp;
  };
  return { validators, getVotingPower };
};
