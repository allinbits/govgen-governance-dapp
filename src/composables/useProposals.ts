import { MsgSubmitProposalEncodeObject } from "@cosmjs/stargate";
import { TextProposal } from "cosmjs-types/cosmos/gov/v1beta1/gov";
import { useWallet } from "./useWallet";

export const useProposals = () => {
  const { sendTx, address } = useWallet();
  const createProposal = async (proposal: { title: string; descr: string }) => {
    const SubmitProposal: MsgSubmitProposalEncodeObject = {
      typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
      value: {
        initialDeposit: [{ amount: "50000000", denom: "ugovno" }],
        proposer: address.value,
        content: {
          typeUrl: "/cosmos.gov.v1beta1.TextProposal",
          value: TextProposal.encode({
            description: proposal.descr,
            title: proposal.title,
          }).finish(),
        },
      },
    };
    const result = await sendTx([SubmitProposal]);
    console.log(result);
    return result;
  };
  return { createProposal };
};
