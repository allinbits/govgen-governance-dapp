<script setup lang="ts">
import Delegate from "@/components/popups/Delegate.vue";
import Redelegate from "@/components/popups/Redelegate.vue";
import Undelegate from "@/components/popups/Undelegate.vue";
import { useQuery, keepPreviousData } from "@tanstack/vue-query";
import { computed, Ref } from "vue";
import { shorten } from "@/utility";
import { useWallet } from "@/composables/useWallet";

import { useValidators } from "@/composables/useValidators";
import { Coin } from "@cosmjs/proto-signing";

const Wallet = useWallet();
const { collectReward, collectAllRewards } = useValidators();

const fetcher = () =>
  fetch("https://api.govgen.dev/cosmos/staking/v1beta1/validators?pagination.limit=1000").then((response) =>
    response.json(),
  );
const delegationsFetcher = (address: Ref<string>) =>
  fetch(`https://api.govgen.dev/cosmos/staking/v1beta1/delegations/${address.value}?pagination.limit=1000`).then(
    (response) => response.json(),
  );
const rewardsFetcher = (address: Ref<string>) =>
  fetch(
    `https://api.govgen.dev/cosmos/distribution/v1beta1/delegators/${address.value}/rewards?pagination.limit=1000`,
  ).then((response) => response.json());
const { data } = useQuery({
  queryKey: ["validators"],
  queryFn: () => fetcher(),
  placeholderData: keepPreviousData,
});

const orderedValidators = computed(() => {
  if (data) {
    return data.value.validators.toSorted(
      (a: { tokens: bigint; status: string }, b: { tokens: bigint; status: string }) => {
        if (a.status == b.status) {
          return b.tokens - a.tokens;
        } else {
          if (a.status == "BOND_STATUS_BONDED") {
            return -1;
          } else {
            if (a.status == "BOND_STATUS_UNBONDING" && b.status == "BOND_STATUS_UNBONDED") {
              return -1;
            } else {
              return 1;
            }
          }
        }
      },
    );
  } else {
    return [];
  }
});

const { data: delegations } = useQuery({
  queryKey: ["delegations"],
  queryFn: () => delegationsFetcher(Wallet.address),
  enabled: Wallet.loggedIn,
});
const { data: rewards } = useQuery({
  queryKey: ["rewards"],
  queryFn: () => rewardsFetcher(Wallet.address),
  enabled: Wallet.loggedIn,
});
const userDelegations = computed(() => {
  if (delegations.value) {
    return delegations.value.delegation_responses as any[];
  } else {
    return [] as any[];
  }
});

const userRewards = computed(() => {
  if (rewards.value) {
    return rewards.value.rewards as any[];
  } else {
    return [] as any[];
  }
});
const isDelegating = (addr: string) => {
  if (userDelegations.value.length == 0) {
    return false;
  } else {
    if (userDelegations.value.find((a) => a.delegation.validator_address == addr)) {
      return true;
    } else {
      return false;
    }
  }
};
const getReward = (addr: string) => {
  if (userRewards.value.length == 0) {
    return [] as Coin[];
  } else {
    if (userRewards.value.find((a) => a.validator_address == addr)) {
      return userRewards.value.find((a) => a.validator_address == addr).reward;
    } else {
      return [] as Coin[];
    }
  }
};
const getDelegationAmount = (addr: string) => {
  if (userDelegations.value.length == 0) {
    return 0n;
  } else {
    if (userDelegations.value.find((a) => a.delegation.validator_address == addr)) {
      return BigInt(userDelegations.value.find((a) => a.delegation.validator_address == addr).balance.amount);
    } else {
      return 0n;
    }
  }
};
</script>

<template>
  <div class="flex flex-col w-full pb-[72px]">
    <div v-if="data">
      <div
        class="grid grid-cols-[repeat(7,minmax(40px,auto))] py-4 gap-y-4 gap-x-4 w-full text-grey-100 font-medium text-200 auto-cols-max"
      >
        <span>Validator</span>
        <span>Address</span>
        <span>Delegated Power</span>
        <span>Status</span>
        <span>Jailed?</span>
        <span>Delegating to?</span>
        <span>Actions</span>
        <template v-for="val in orderedValidators" :key="val.operator_address">
          <span>{{ val.description.moniker }}</span>
          <span>{{ shorten(val.operator_address) }}</span>
          <span>{{ val.tokens }}</span>
          <span>{{ val.status }}</span>
          <span>{{ val.jailed }}</span>
          <span>{{ isDelegating(val.operator_address) }}</span>
          <span>
            <Delegate v-if="Wallet.loggedIn" :validator-address="val.operator_address"></Delegate>
            <Redelegate
              v-if="Wallet.loggedIn && isDelegating(val.operator_address)"
              :validator-list="orderedValidators"
              :validator-address="val.operator_address"
              :delegation-amount="getDelegationAmount(val.operator_address)"
            >
            </Redelegate>
            <Undelegate
              v-if="Wallet.loggedIn && isDelegating(val.operator_address)"
              :validator-address="val.operator_address"
              :delegation-amount="getDelegationAmount(val.operator_address)"
            >
            </Undelegate>
            <span
              v-if="getReward(val.operator_address).length > 0"
              @click="
                () => {
                  collectReward({ validatorAddress: val.operator_address });
                }
              "
              >Claim reward: {{ getReward(val.operator_address) }}</span
            >
          </span>
        </template>
      </div>
      <div
        v-if="userRewards.length > 0"
        @click="
          () => {
            collectAllRewards(userRewards.map((x) => x.validator_address));
          }
        "
      >
        Claim all rewards
      </div>
    </div>
  </div>
</template>
