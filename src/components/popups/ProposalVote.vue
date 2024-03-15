<script setup lang="ts">
import { computed, ref, reactive } from "vue";

import UiSwitch from "../ui/UiSwitch.vue";
import UiState from "../ui/UiState.vue";
import UiInput from "../ui/UiInput.vue";

const isOpen = ref(false);
const isStraight = ref(true);
const isWeighted = ref(false);
const isVoted = ref(false);

const waitingState = computed(() => !isOpen.value && !isVoted.value);
const straightState = computed(() => isStraight.value && isOpen.value && !isWeighted.value && !isVoted.value);

const options = reactive(["Straight", "Weighted"]);
const tab = ref(options[0]);

const voteStraightOpt = ref();
const voteWeightedYes = ref<number | null>(null);
const voteWeightedNo = ref<number | null>(null);

const resetVote = () => {
  voteStraightOpt.value = false;
  voteWeightedNo.value = null;
  voteWeightedYes.value = null;
};

const toogleModal = (dir: boolean) => {
  isOpen.value = dir;
  resetVote();
};

const checkVoteWeighted = computed(
  () =>
    voteWeightedNo.value !== null &&
    voteWeightedYes.value !== null &&
    voteWeightedNo.value + voteWeightedYes.value === 1,
);
</script>

<template>
  <div class="relative">
    <!-- Normal signed out button -->
    <template v-if="waitingState">
      <div
        class="justify-center px-6 py-4 rounded bg-gradient text-dark text-300 text-center cursor-pointer w-64"
        @click="toogleModal(true)"
      >
        Vote
      </div>
    </template>

    <template v-if="straightState">
      <div class="absolute left-0 top-4">
        <div class="flex flex-col gap-6 px-10 py-6 bg-grey-400 rounded w-screen max-w-[25rem] relative">
          <span class="text-gradient font-termina text-700 text-center">Vote</span>
          <UiSwitch id="voteType" v-model="tab" :options="options" class="flex w-2/3 mx-auto" @click="resetVote()" />
          <div class="flex flex-col gap-10">
            <div>
              <Transition>
                <div v-show="tab === 'Straight'" class="flex flex-col px-4">
                  <UiState v-model="voteStraightOpt" type="radio" value="straightY" label="Vote “YES” " />
                  <UiState v-model="voteStraightOpt" type="radio" value="straightN" label="Vote “NO” " />
                  <UiState v-model="voteStraightOpt" type="radio" value="straightNWV" label="Vote “NO WITH VETO” " />
                  <UiState v-model="voteStraightOpt" type="radio" value="straightA" label="Vote “ABSTAIN” " />
                </div>
              </Transition>

              <Transition>
                <div v-show="tab === 'Weighted'" class="flex flex-col gap-10">
                  <p class="text-grey-100 text-center text-200">
                    Define weight for each of the voting options. The sum of weights must be equal to 1.
                  </p>

                  <form class="flex flex-col items-center gap-4">
                    <UiInput
                      v-model="voteWeightedYes"
                      type="number"
                      placeholder="e.g. 0.2"
                      label="Vote “YES”"
                      variant="row"
                      :min="0"
                      :max="1"
                      class="w-full justify-center"
                    />
                    <UiInput
                      v-model="voteWeightedNo"
                      type="number"
                      placeholder="e.g. 0.8"
                      label="Vote “NO”"
                      variant="row"
                      :min="0"
                      :max="1"
                      class="w-full justify-center"
                    />
                  </form>
                </div>
              </Transition>
            </div>

            <div class="flex flex-col gap-4">
              <div v-show="voteStraightOpt || checkVoteWeighted" class="flex flex-col gap-4">
                <button class="px-6 py-4 rounded bg-gradient text-dark text-300 text-center w-full">
                  Confirm & Sign
                </button>

                <button
                  class="px-6 py-4 rounded text-light text-300 text-center w-full hover:opacity-50 duration-150 ease-in-out"
                >
                  or Copy CLI Command
                </button>
              </div>

              <button
                class="px-6 py-4 rounded text-light text-300 text-center w-full hover:opacity-50 duration-150 ease-in-out"
                @click="toogleModal(false)"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
