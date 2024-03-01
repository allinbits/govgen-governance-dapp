import { TextProposal } from "@atomone/govgen-types/govgen/gov/v1beta1/gov";
import { useWallet } from "./useWallet";
import { MsgDeposit, MsgSubmitProposal, MsgVote, MsgVoteWeighted } from "@atomone/govgen-types/govgen/gov/v1beta1/tx";
import { EncodeObject } from "@cosmjs/proto-signing";

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
        option: voteWeighted.options,
      },
    };
    const result = await sendTx([VoteWeighted]);
    console.log(result);
    return result;
  };
  return { createProposal, depositProposal, createTextProposalContent, voteProposal, voteWeightedProposal };
};
