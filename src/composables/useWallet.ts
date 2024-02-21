import { ref, computed } from "vue";
import chainInfo from "../chain-config.json";

export enum Wallets {
  keplr = "KEPLR",
  leap = "LEAP",
  cosmostation = "COSMOSTATION",
}
export const useWallet = () => {
  const walletState = {
    keplr: computed(() => !!window.keplr),
    leap: computed(() => !!window.leap),
    cosmostation: computed(() => !!window.cosmostation),
    loggedIn: ref(false),
    address: ref(""),
    used: ref<Wallets | null>(null),
  };
  const signOut = () => {
    walletState.address.value = "";
    walletState.used.value = null;
    walletState.loggedIn.value = false;
  };

  const connect = async (walletType: Wallets) => {
    switch (walletType) {
      case Wallets.keplr:
        await window.keplr?.experimentalSuggestChain(chainInfo);
        await window.keplr?.enable(chainInfo.chainId);
        if (window.getOfflineSigner) {
          walletState.address.value = (await window.getOfflineSigner(chainInfo.chainId).getAccounts())[0].address;
          walletState.loggedIn.value = true;
          walletState.used.value = Wallets.keplr;
        }

        break;
      case Wallets.leap:
        await window.leap?.experimentalSuggestChain(chainInfo);
        await window.leap?.enable(chainInfo.chainId);
        walletState.address.value = (await window.leap.getOfflineSigner(chainInfo.chainId).getAccounts())[0].address;
        walletState.loggedIn.value = true;
        walletState.used.value = Wallets.leap;
        break;
      case Wallets.cosmostation:
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        await (window.cosmostation as any).cosmos.request({
          method: "cos_addChain",
          params: {
            chainId: chainInfo.chainId,
            chainName: chainInfo.chainName,
            addressPrefix: chainInfo.bech32Config.bech32PrefixAccAddr,
            baseDenom: chainInfo.stakeCurrency.coinMinimalDenom,
            displayDenom: chainInfo.stakeCurrency.coinDenom,
            restURL: chainInfo.rest,
            decimals: chainInfo.stakeCurrency.coinDecimals, // optional
            coinType: "" + chainInfo.bip44.coinType, // optional
          },
        });
        walletState.address.value = // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (
            await (window.cosmostation as any).cosmos.request({
              method: "cos_requestAccount",
              params: { chainName: "cosmoshub-4" },
            })
          ).address;
        walletState.loggedIn.value = true;
        walletState.used.value = Wallets.cosmostation;
        break;
    }
  };
  return { ...walletState, signOut, connect };
};
