<script setup lang="ts">
import ProposalCard from "@/components/home/ProposalCard.vue";
import CommentCount from "@/components/home/CommentCount.vue";
import DelegatedTotal from "@/components/helper/DelegatedTotal.vue";
import BlockTimestamp from "@/components/helper/BlockTimestamp.vue";
import ProposalStatus from "@/components/ui/ProposalStatus.vue";
import { PropStatus } from "@/types/proposals";
import { ProposalsActiveQuery, VoteHistoryQuery } from "@/gql/graphql";
import { ref } from "vue";
import { decToPerc, totalAmounts } from "@/utility";

const listView = ref(false);
const setList = (list: boolean) => {
  listView.value = list;
};

const props = defineProps<{
  title: string;
  address: string;
  proposals: Array<ProposalsActiveQuery["all_proposals"][0] & { vote: VoteHistoryQuery["proposal_vote"] }>;
}>();
</script>
<template>
  <div>
    <div class="flex flex-col w-full justify-start items-center lg:flex-row gap-4 lg:gap-6 lg:justify-between">
      <div class="flex flex-col gap-10 w-full lg:flex-row lg:items-center">
        <div class="font-termina text-500 lg:text-600 xl:text-700">{{ title }}</div>
      </div>
      <div class="flex flex-row gap-4 w-full justify-start md:flex-row lg:items-center lg:justify-end">
        <Icon
          icon="card"
          class="aspect-square text-400 hover:text-light text-grey-100 cursor-pointer"
          :class="{ 'text-light': !listView }"
          @click="
            () => {
              setList(false);
            }
          "
        />
        <Icon
          icon="rows"
          class="aspect-square text-400 hover:text-light text-grey-100 cursor-pointer"
          :class="{ 'text-light': listView }"
          @click="
            () => {
              setList(true);
            }
          "
        />
      </div>
    </div>
    <!-- Proposal View -->
    <div v-if="proposals">
      <template v-if="listView">
        <div class="flex flex-col w-full mt-12">
          <div
            class="grid grid-cols-[repeat(8,minmax(40px,auto))] py-4 gap-y-4 gap-x-4 w-full text-grey-100 font-medium text-200 auto-cols-max"
          >
            <span class="w-[40px]">#</span>
            <span>Name</span>
            <span>Type</span>
            <span>Status</span>
            <span>Vote</span>
            <span>Deposited</span>
            <span>Vote Stake</span>
            <span class="text-right">Voted/Overridden</span>

            <template v-for="proposal in proposals" :key="proposal.id">
              <span class="w-[40px]">{{ proposal.id }}</span>
              <span> {{ proposal.title }}</span>
              <span> {{ $t("propType", proposal.content["@type"]) }}</span>
              <span> {{ $t("propStatus." + proposal.status) }}</span>
              <span class="flex flex-col gap-2">
                <template v-if="proposal.vote.length > 0">
                  <div
                    v-for="vote in proposal.vote"
                    :key="vote.option + vote.proposal_id"
                    :class="{
                      'text-accent-100': vote.option == 'VOTE_OPTION_YES',
                      'text-accent-200': vote.option == 'VOTE_OPTION_NO_WITH_VETO',
                      'text-neg-200': vote.option == 'VOTE_OPTION_NO',
                      'text-grey-100': vote.option == 'VOTE_OPTION_ABSTAIN',
                    }"
                  >
                    {{ $t("voteOptions." + vote.option)
                    }}<template v-if="Number(vote.weight) != 1">: {{ decToPerc(vote.weight, 0) }}%</template>
                  </div>
                </template></span
              >
              <span>
                <template
                  v-if="proposal.proposal_deposits.filter((x) => x.depositor_address == props.address).length > 0"
                >
                  {{
                    totalAmounts(
                      proposal.proposal_deposits
                        .filter((x) => x.depositor_address == address)
                        .map((x) => x.amount)
                        .flat(),
                    )
                  }}
                </template>
                <template v-else> - </template>
              </span>
              <span v-if="proposal.vote.length > 0"
                ><DelegatedTotal :address="address" :height="proposal.vote[0].height"></DelegatedTotal
              ></span>
              <span v-else> - </span>
              <span v-if="proposal.vote.length > 0" class="text-right">
                <BlockTimestamp :height="proposal.vote[0].height"></BlockTimestamp
              ></span>
              <span v-else class="text-right"> - </span>
            </template>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6 mt-12">
          <ProposalCard v-for="proposal in proposals" :key="proposal.id" :link="'/proposals/' + proposal.id">
            <template #header
              ><ProposalStatus
                :status="PropStatus[(proposal.status ?? 'PROPOSAL_STATUS_UNSPECIFIED') as keyof typeof PropStatus]"
            /></template>
            <template #number>#{{ proposal.id }}</template>
            <div>{{ proposal.title }}</div>
            <div v-if="proposal.vote.length > 0" class="text-light text-200 mt-6">
              Voted: <span class="text-grey-100">{{ proposal.vote[0].height }}</span>
            </div>
            <div v-if="proposal.vote.length > 0" class="flex flex-row gap-3">
              <div
                v-for="vote in proposal.vote"
                :key="vote.option + vote.proposal_id"
                class="rounded-md text-grey-100 text-100 p-2 px-4 mt-4 font-normal"
                :class="{
                  'bg-accent-100 text-grey-200': vote.option == 'VOTE_OPTION_YES',
                  'bg-accent-200 text-grey-200': vote.option == 'VOTE_OPTION_NO_WITH_VETO',
                  'bg-neg-200 text-grey-200': vote.option == 'VOTE_OPTION_NO',
                  'bg-grey-100 text-light': vote.option == 'VOTE_OPTION_ABSTAIN',
                }"
              >
                Voted {{ $t("voteOptions." + vote.option)
                }}<template v-if="Number(vote.weight) != 1">: {{ decToPerc(vote.weight, 0) }}%</template>
              </div>
            </div>
            <div
              v-if="proposal.proposal_deposits.filter((x) => x.depositor_address == props.address).length > 0"
              class="flex"
            >
              <div
                class="rounded-md text-light text-100 p-2 px-4 mt-2 font-normal bg-grey-200 flex flex-row justify-center items-end"
              >
                Deposited
                <Icon
                  icon="info"
                  class="aspect-square ml-2"
                  :title="
                    totalAmounts(
                      proposal.proposal_deposits
                        .filter((x) => x.depositor_address == address)
                        .map((x) => x.amount)
                        .flat(),
                    )
                  "
                />
              </div>
            </div>
            <template #footer>
              <div class="flex flex-row text-200 text-grey-100 font-medium items-center justify-between w-full">
                <span></span>
                <div class="flex flex-row gap-4">
                  <!-- Vote Count-->
                  <div class="flex flex-row items-center gap-1">
                    <Icon icon="voters" />
                    <span>{{ proposal.proposal_votes_aggregate.aggregate?.count ?? 0 }}</span>
                  </div>
                  <!-- Comment Count -->
                  <div class="flex flex-row items-center gap-1">
                    <Icon icon="comments" />
                    <CommentCount :proposal="proposal.id" />
                  </div>
                </div>
              </div>
            </template>
          </ProposalCard>
        </div>
      </template>
    </div>
  </div>
</template>
