import { TextProposal } from "@atomone/govgen-types/govgen/gov/v1beta1/gov";
import { ParameterChangeProposal } from "@atomone/govgen-types/cosmos/params/v1beta1/params";
import { useWallet } from "./useWallet";
import { MsgDeposit, MsgSubmitProposal, MsgVote, MsgVoteWeighted } from "@atomone/govgen-types/govgen/gov/v1beta1/tx";
import { EncodeObject } from "@cosmjs/proto-signing";
import { SoftwareUpgradeProposal } from "@atomone/govgen-types/cosmos/upgrade/v1beta1/upgrade";

export const useProposals = () => {
  const { sendTx, address } = useWallet();
  const createTextProposalContent = (proposal: TextProposal): EncodeObject => {
    return {
      typeUrl: "/govgen.gov.v1beta1.TextProposal",
      value: TextProposal.encode({
        description: proposal.description,
        title: proposal.title,
      }).finish(),
    };
  };

  const createParamChangeProposalContent = (proposal: ParameterChangeProposal): EncodeObject => {
    return {
      typeUrl: "/cosmos.params.v1beta1.ParameterChangeProposal",
      value: ParameterChangeProposal.encode({
        description: proposal.description,
        title: proposal.title,
        changes: proposal.changes,
      }).finish(),
    };
  };
  const createUpgradePlanProposalContent = (proposal: SoftwareUpgradeProposal): EncodeObject => {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
      value: SoftwareUpgradeProposal.encode({
        description: proposal.description,
        title: proposal.title,
        plan: proposal.plan,
      }).finish(),
    };
  };
  const createProposal = async (proposalMeta: Partial<MsgSubmitProposal>, proposal: EncodeObject) => {
    const SubmitProposal: EncodeObject = {
      typeUrl: "/govgen.gov.v1beta1.MsgSubmitProposal",
      value: {
        initialDeposit: proposalMeta.initialDeposit,
        proposer: address.value,
        content: proposal,
      },
    };

    const result = await sendTx([SubmitProposal]);
    console.log(result);
    return result;
  };
  const depositProposal = async (deposit: Partial<MsgDeposit>) => {
    const Deposit: EncodeObject = {
      typeUrl: "/govgen.gov.v1beta1.MsgDeposit",
      value: {
        proposalId: deposit.proposalId,
        depositor: address.value,
        amount: deposit.amount,
      },
    };
    const result = await sendTx([Deposit]);
    console.log(result);
    return result;
  };
  const voteProposal = async (vote: Partial<MsgVote>) => {
    const Vote: EncodeObject = {
      typeUrl: "/govgen.gov.v1beta1.MsgVote",
      value: {
        proposalId: vote.proposalId,
        voter: address.value,
        option: vote.option,
      },
    };
    const result = await sendTx([Vote]);
    console.log(result);
    return result;
  };
  const voteWeightedProposal = async (voteWeighted: Partial<MsgVoteWeighted>) => {
    const VoteWeighted: EncodeObject = {
      typeUrl: "/govgen.gov.v1beta1.MsgVoteWeighted",
      value: {
        proposalId: voteWeighted.proposalId,
        voter: address.value,
        options: voteWeighted.options,
      },
    };
    const result = await sendTx([VoteWeighted]);
    console.log(result);
    return result;
  };
  return {
    createProposal,
    depositProposal,
    createTextProposalContent,
    voteProposal,
    voteWeightedProposal,
    createParamChangeProposalContent,
    createUpgradePlanProposalContent,
  };
};
