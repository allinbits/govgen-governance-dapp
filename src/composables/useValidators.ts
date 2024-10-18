import { MsgBeginRedelegate, MsgDelegate, MsgUndelegate } from "cosmjs-types/cosmos/staking/v1beta1/tx";
import { MsgWithdrawDelegatorReward } from "cosmjs-types/cosmos/distribution/v1beta1/tx";
import { useWallet } from "@/composables/useWallet";
import { EncodeObject } from "@cosmjs/proto-signing";

export const useValidators = () => {
  const { sendTx, address } = useWallet();

  const collectReward = async (claim: Partial<MsgWithdrawDelegatorReward>, cli: boolean = false) => {
    if (cli) {
      //TODO : CommandBuilder + proposal JSON Generation
    } else {
      const Claim: EncodeObject = {
        typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
        value: {
          delegatorAddress: address.value,
          validatorAddress: claim.validatorAddress,
        },
      };
      const result = await sendTx([Claim]);
      return result;
    }
  };
  const collectAllRewards = async (validators: string[], cli: boolean = false) => {
    if (cli) {
      //TODO : CommandBuilder + proposal JSON Generation
    } else {
      const claims: EncodeObject[] = [];
      for (let i = 0; i < validators.length; i++) {
        const Claim: EncodeObject = {
          typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
          value: {
            delegatorAddress: address.value,
            validatorAddress: validators[i],
          },
        };
        claims.push(Claim);
      }
      const result = await sendTx(claims);
      return result;
    }
  };
  const createDelegation = async (delegation: Partial<MsgDelegate>, cli: boolean = false) => {
    if (cli) {
      //TODO : CommandBuilder + proposal JSON Generation
    } else {
      const Delegation: EncodeObject = {
        typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
        value: {
          delegatorAddress: address.value,
          validatorAddress: delegation.validatorAddress,
          amount: delegation.amount,
        },
      };
      const result = await sendTx([Delegation]);
      return result;
    }
  };
  const beginRedelegation = async (redelegation: Partial<MsgBeginRedelegate>, cli: boolean = false) => {
    if (cli) {
      //TODO : CommandBuilder + proposal JSON Generation
    } else {
      const Redelegation: EncodeObject = {
        typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
        value: {
          delegatorAddress: address.value,
          validatorSrcAddress: redelegation.validatorSrcAddress,
          validatorDstAddress: redelegation.validatorDstAddress,
          amount: redelegation.amount,
        },
      };
      const result = await sendTx([Redelegation]);
      return result;
    }
  };
  const createUndelegation = async (undelegation: Partial<MsgUndelegate>, cli: boolean = false) => {
    if (cli) {
      //TODO : CommandBuilder + proposal JSON Generation
    } else {
      const Undelegation: EncodeObject = {
        typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
        value: {
          delegatorAddress: address.value,
          validatorAddress: undelegation.validatorAddress,
          amount: undelegation.amount,
        },
      };
      const result = await sendTx([Undelegation]);
      return result;
    }
  };
  return { createDelegation, createUndelegation, beginRedelegation, collectReward, collectAllRewards };
};
