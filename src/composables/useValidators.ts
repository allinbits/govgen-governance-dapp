import { MsgBeginRedelegate, MsgDelegate, MsgUndelegate } from "cosmjs-types/cosmos/staking/v1beta1/tx";
import { MsgWithdrawDelegatorReward } from "cosmjs-types/cosmos/distribution/v1beta1/tx";
import { useWallet } from "@/composables/useWallet";
import { EncodeObject } from "@cosmjs/proto-signing";
import chainInfo from "@/chain-config.json";
import CommandBuilder from "@/utility/commandBuilder";

export const useValidators = () => {
  const { sendTx, address } = useWallet();
  const fetchSequence = async () => {
    const res = await fetch(`${chainInfo.rest}cosmos/auth/v1beta1/accounts/${address.value}`).then((response) =>
      response.json(),
    );
    return parseInt(res.account.sequence);
  };
  const collectReward = async (claim: Partial<MsgWithdrawDelegatorReward>, cli: boolean = false) => {
    if (cli && claim.validatorAddress) {
      const command = CommandBuilder.ClaimRewards(claim.validatorAddress)
        .withChainId(chainInfo.chainId)
        .withFees([{ amount: "5000", denom: chainInfo.feeCurrencies[0].coinMinimalDenom }])
        .withSigner(address.value)
        .withSequence(await fetchSequence())
        .finish();
      return command;
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
      const command = CommandBuilder.ClaimAllRewards()
        .withChainId(chainInfo.chainId)
        .withFees([{ amount: "5000", denom: chainInfo.feeCurrencies[0].coinMinimalDenom }])
        .withSequence(await fetchSequence())
        .withSigner(address.value);
      return command;
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
    if (cli && delegation.validatorAddress && delegation.amount) {
      const command = CommandBuilder.Delegate()
        .withChainId(chainInfo.chainId)
        .withFees([{ amount: "5000", denom: chainInfo.feeCurrencies[0].coinMinimalDenom }])
        .withSequence(await fetchSequence())
        .withSigner(address.value)
        .addParam(delegation.validatorAddress)
        .addAmountParam(delegation.amount)
        .finish();
      return command;
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
    if (cli && redelegation.validatorDstAddress && redelegation.validatorSrcAddress && redelegation.amount) {
      const command = CommandBuilder.Redelegate()
        .withChainId(chainInfo.chainId)
        .withFees([{ amount: "5000", denom: chainInfo.feeCurrencies[0].coinMinimalDenom }])
        .withSequence(await fetchSequence())
        .withSigner(address.value)
        .addParam(redelegation.validatorSrcAddress)
        .addParam(redelegation.validatorDstAddress)
        .addAmountParam(redelegation.amount)
        .finish();
      return command;
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
    if (cli && undelegation.validatorAddress && undelegation.amount) {
      const command = CommandBuilder.Undelegate()
        .withChainId(chainInfo.chainId)
        .withFees([{ amount: "5000", denom: chainInfo.feeCurrencies[0].coinMinimalDenom }])
        .withSequence(await fetchSequence())
        .withSigner(address.value)
        .addParam(undelegation.validatorAddress)
        .addAmountParam(undelegation.amount)
        .finish();
      return command;
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
