/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref, computed, Ref } from "vue";
import chainInfo from "../chain-config.json";
import { EncodeObject, OfflineSigner } from "@cosmjs/proto-signing";
import { getSigningGovgenClient } from "@atomone/govgen-types/govgen/client";
import { getOfflineSigner } from "@cosmostation/cosmos-client";
import { useChainData } from "./useChainData";

export enum Wallets {
  keplr = "Keplr",
  leap = "Leap",
  cosmostation = "Cosmostation",
}
export const getWalletHelp = (wallet: Wallets) => {
  switch (wallet) {
    case Wallets.keplr:
      return "https://help.keplr.app/articles/advanced-troubleshooting-guidelines";
    case Wallets.leap:
      return "https://leapwallet.notion.site/Leap-Cosmos-Wallet-Support-ba1da3c05d3341eaa44a1850ed3260ee";
    case Wallets.cosmostation:
      return "https://guide.cosmostation.io/web_wallet_en.html";
  }
};
const useWalletInstance = () => {
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
  const signer: Ref<OfflineSigner | null> = ref(null);

  const connect = async (walletType: Wallets, signal?: AbortSignal) => {
    if (signal?.aborted) {
      return Promise.reject(new DOMException("Aborted", "AbortError"));
    }
    const abortHandler = () => {
      walletState.address.value = "";
      walletState.used.value = null;
      walletState.loggedIn.value = false;
    };
    signal?.addEventListener("abort", abortHandler);
    switch (walletType) {
      case Wallets.keplr:
        try {
          await window.keplr?.experimentalSuggestChain(chainInfo);
          await window.keplr?.enable(chainInfo.chainId);
          if (window.getOfflineSigner) {
            walletState.address.value = (await window.getOfflineSigner(chainInfo.chainId).getAccounts())[0].address;
            walletState.loggedIn.value = true;
            walletState.used.value = Wallets.keplr;
            signer.value = window.getOfflineSigner(chainInfo.chainId);
            if (signal?.aborted) {
              abortHandler();
            }
          } else {
            throw new Error("Could not connect to Keplr: getOfflineSigner method does not exist");
          }
        } catch (e) {
          throw new Error("Could not connect to Keplr: " + e);
        } finally {
          signal?.removeEventListener("abort", abortHandler);
        }
        break;
      case Wallets.leap:
        try {
          await window.leap?.experimentalSuggestChain(chainInfo);
          await window.leap?.enable(chainInfo.chainId);
          walletState.address.value = (await window.leap.getOfflineSigner(chainInfo.chainId).getAccounts())[0].address;
          walletState.loggedIn.value = true;
          walletState.used.value = Wallets.leap;
          signer.value = window.leap.getOfflineSigner(chainInfo.chainId);
          if (signal?.aborted) {
            abortHandler();
          }
        } catch (e) {
          throw new Error("Could not connect to Leap Wallet: " + e);
        } finally {
          signal?.removeEventListener("abort", abortHandler);
        }
        break;
      case Wallets.cosmostation:
        try {
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
          walletState.address.value = (
            await (window.cosmostation as any).cosmos.request({
              method: "cos_requestAccount",
              params: { chainName: chainInfo.chainId },
            })
          ).address;
          walletState.loggedIn.value = true;
          walletState.used.value = Wallets.cosmostation;
          signer.value = (await getOfflineSigner(chainInfo.chainId)) as OfflineSigner; // Appears to be a re-declaration of OfflineSigner and TS cannot figure out they're the same.
          if (signal?.aborted) {
            abortHandler();
          }
        } catch (e) {
          throw new Error("Could not connect to Cosmostation: " + e);
        } finally {
          signal?.removeEventListener("abort", abortHandler);
        }
        break;
    }
  };
  const sendTx = async (msgs: EncodeObject[]) => {
    if (signer.value) {
      try {
        const client = await getSigningGovgenClient({ rpcEndpoint: chainInfo.rpc, signer: signer.value });
        const result = await client.signAndBroadcast(walletState.address.value, msgs, {
          amount: [{ amount: "0", denom: chainInfo.feeCurrencies[0].coinMinimalDenom }],
          gas: "200000",
        });
        return result;
      } catch (e) {
        throw new Error("Could not sign messages");
      }
    } else {
      throw new Error("No Signer available");
    }
  };
  const refreshAddress = () => {
    if (walletState.used.value) {
      connect(walletState.used.value);
    }
  };
  window.addEventListener("cosmostation_keystorechange", refreshAddress);
  window.addEventListener("keplr_keystorechange", refreshAddress);
  window.addEventListener("leap_keystorechange", refreshAddress);

  const { getBalance } = useChainData();
  
  return { ...walletState, signOut, connect, sendTx };
};

let walletInstance: ReturnType<typeof useWalletInstance>;

export const useWallet = () => {
  if (!walletInstance) {
    walletInstance = useWalletInstance();
  }
  return walletInstance;
};
