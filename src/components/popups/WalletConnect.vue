<script lang="ts" setup>
import { Wallets, useWallet, getWalletHelp } from "@/composables/useWallet";
import ConnectButton from "@/components/ui/ConnectButton.vue";
import { Ref, computed, ref } from "vue";
import { shorten } from "@/utility";
import UserBalance from "@/components/helper/UserBalance.vue";
import { bus } from "@/bus";
import { usePlausible } from "v-plausible/vue";

const isOpen = ref(false);
const isConnecting = ref(false);
const isError = ref(false);
const isSlowConnecting = ref(false);

const { connect, signOut, address, loggedIn, keplr, leap, cosmostation } = useWallet();

const connectState = computed(() => !isConnecting.value && !isOpen.value && !loggedIn.value && !isError.value);
const selectState = computed(() => !isConnecting.value && isOpen.value && !loggedIn.value && !isError.value);
const connectingState = computed(() => isConnecting.value && isOpen.value && !loggedIn.value && !isError.value);
const connectedState = computed(() => !isConnecting.value && !isOpen.value && loggedIn.value && !isError.value);
const viewState = computed(() => !isConnecting.value && isOpen.value && loggedIn.value && !isError.value);
const errorState = computed(() => isOpen.value && isError.value);

const controller: Ref<AbortController | null> = ref(null);
const chosenWallet: Ref<Wallets> = ref(Wallets.keplr);
const connectWallet = async (walletType: Wallets, address?: string) => {
  isError.value = false;
  isConnecting.value = true;
  isOpen.value = true;
  isSlowConnecting.value = false;
  chosenWallet.value = walletType;
  let slow: ReturnType<typeof setTimeout> | null = null;
  controller.value = new AbortController();
  try {
    slow = setTimeout(() => (isSlowConnecting.value = true), 10000);
    if (walletType == Wallets.addressOnly && address) {
      await connect(walletType, address, controller.value.signal);
    } else {
      await connect(walletType, undefined, controller.value.signal);
    }
    isConnecting.value = false;
    isSlowConnecting.value = false;
    isOpen.value = false;
    if (slow) {
      clearTimeout(slow);
      slow = null;
    }
  } catch (e) {
    isConnecting.value = false;
    isSlowConnecting.value = false;
    isError.value = true;
    if (slow) {
      clearTimeout(slow);
      slow = null;
    }
  }
};
const cancelConnect = () => {
  controller.value?.abort();
  isConnecting.value = false;
  isSlowConnecting.value = false;
  isOpen.value = false;
  isError.value = false;
};
bus.on("open", () => {
  isOpen.value = true;
});

const { trackEvent } = usePlausible();
</script>

<template>
  <div>
    <!-- Normal signed out button -->
    <template v-if="connectState">
      <button
        class="justify-center px-6 py-4 rounded bg-grey-400 text-300 text-center hover:bg-light hover:text-dark duration-200"
        @click="
          () => {
            isOpen = true;
            trackEvent('Click Header ConnectWallet');
          }
        "
      >
        {{ $t("components.WalletConnect.button") }}
      </button>
    </template>

    <!-- Wallet Selection -->
    <Transition name="fade">
      <template v-if="selectState">
        <div class="absolute right-0 top-4 z-10">
          <div class="flex flex-col gap-6 px-8 py-6 bg-grey-300 rounded w-80 relative">
            <Icon class="absolute top-3 right-4 cursor-pointer text-light" icon="close" @click="isOpen = false" />
            <div class="flex flex-col text-[white] text-500 font-semibold text-center">
              {{ $t("components.WalletConnect.cta") }}
            </div>
            <div class="flex flex-col text-grey-100 text-300 font-medium text-center">
              {{ $t("components.WalletConnect.instruction") }}
            </div>
            <div class="buttons">
              <ConnectButton class="my-4" :disabled="!keplr" @click="connectWallet(Wallets.keplr)">
                <template #icon>
                  <Icon icon="keplr" :size="1.4" class="mr-2" />
                </template>
                Keplr Wallet</ConnectButton
              >
              <ConnectButton class="my-4" :disabled="!leap" @click="connectWallet(Wallets.leap)"
                ><Icon icon="leap" :size="1.1" class="mr-2 bg-dark p-1 rounded-sm" />Leap Wallet</ConnectButton
              >
              <ConnectButton class="my-4" :disabled="!cosmostation" @click="connectWallet(Wallets.cosmostation)">
                <template #icon> <Icon icon="cosmostation" :size="1.1" class="mr-2 bg-dark p-1 rounded-sm" /> </template
                >Cosmostation Wallet</ConnectButton
              >
            </div>
          </div>
        </div>
      </template>

      <!-- Normal signed in account display -->
      <template v-else-if="connectedState">
        <div class="flex align-center items-stretch cursor-pointer" @click="isOpen = true">
          <div class="bg-gradient w-10 h-10 rounded-full mr-3"></div>
          <div class="flex flex-col justify-around">
            <div class="text-light text-200">{{ shorten(address) }}</div>
            <div class="text-100 text-grey-100"><UserBalance :address="address" :denom="'ugovgen'" /> govgen</div>
          </div>
        </div>
      </template>

      <!-- Normal signed in account extended -->
      <template v-else-if="viewState">
        <div class="absolute right-0 top-4">
          <div class="flex flex-col px-8 py-4 pt-12 bg-grey-300 rounded w-80 relative">
            <Icon class="absolute top-3 right-4 cursor-pointer text-light" icon="close" @click="isOpen = false" />
            <div class="flex align-center items-stretch">
              <div class="bg-gradient w-10 h-10 rounded-full mr-3"></div>
              <div class="flex flex-col justify-around">
                <div class="text-light text-300">{{ shorten(address) }}</div>
              </div>
            </div>
            <div class="text-200 text-grey-100 pt-6 pb-2">{{ $t("components.WalletConnect.balance") }}</div>
            <div class="text-300 text-light"><UserBalance :address="address" :denom="'ugovgen'" /> govgen</div>
            <div class="buttons">
              <ConnectButton
                class="my-4 justify-center"
                @click="
                  signOut();
                  isOpen = false;
                "
              >
                {{ $t("components.WalletConnect.disconnect") }}</ConnectButton
              >
            </div>
          </div>
        </div>
      </template>

      <!-- Connection in progress -->
      <template v-else-if="connectingState">
        <div class="absolute right-0 top-4">
          <div class="flex flex-col px-8 py-4 pt-6 bg-grey-300 rounded w-80 relative align-center items-center">
            <Icon icon="loading" :size="3" />

            <div class="flex flex-col text-[white] text-400 font-semibold text-center mt-4">
              {{ $t("components.WalletConnect.connecting") }}
            </div>
            <div class="text-200 text-grey-100 my-4">{{ $t("components.WalletConnect.wait") }}</div>
            <div class="buttons">
              <ConnectButton
                class="my-4 justify-center"
                @click="
                  () => {
                    cancelConnect();
                  }
                "
              >
                {{ $t("ui.actions.cancel") }}</ConnectButton
              >
            </div>

            <div v-if="isSlowConnecting">
              <a
                :href="getWalletHelp(chosenWallet)"
                target="_blank"
                class="text-100 flex my-2 justify-center items-center"
                >{{ chosenWallet }} {{ $t("components.WalletConnect.trouble") }} <Icon icon="link" class="ml-2"
              /></a>
            </div>
          </div>
        </div>
      </template>
    </Transition>

    <!-- Connection failed -->
    <template v-if="errorState">
      <div class="absolute right-0 top-4">
        <div class="flex flex-col px-8 py-4 pt-6 bg-grey-300 rounded w-80 relative align-center items-center">
          <Icon icon="close" :size="3" class="text-neg-200" />

          <div class="flex flex-col text-[white] text-400 font-semibold text-center mt-4">
            {{ $t("components.WalletConnect.failed") }}
          </div>
          <div class="text-200 text-grey-100 my-4 text-center">{{ $t("components.WalletConnect.failedSub") }}</div>
          <div class="buttons">
            <ConnectButton
              class="my-4 justify-center"
              @click="
                () => {
                  connectWallet(chosenWallet);
                }
              "
            >
              {{ $t("components.WalletConnect.retry") }}</ConnectButton
            >
            <ConnectButton
              class="my-4 justify-center"
              @click="
                () => {
                  cancelConnect();
                }
              "
            >
              {{ $t("ui.actions.done") }}</ConnectButton
            >
          </div>

          <div>
            <a
              :href="getWalletHelp(chosenWallet)"
              target="_blank"
              class="text-100 flex my-2 justify-center items-center"
              >{{ chosenWallet }} {{ $t("components.WalletConnect.trouble") }} <Icon icon="link" class="ml-2"
            /></a>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
