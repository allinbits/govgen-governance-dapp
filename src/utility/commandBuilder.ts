import { Coin } from "@atomone/atomone-types/cosmos/base/v1beta1/coin";

export default class CommandBuilder {
  private command: string[];
  private address: string;
  private fees: Coin[];
  private chainId: string;

  static Deposit() {
    return new CommandBuilder("deposit");
  }
  static Vote() {
    return new CommandBuilder("vote");
  }
  static WeightedVote() {
    return new CommandBuilder("weighted-vote");
  }
  constructor(action: string) {
    this.command = [];
    this.address = "";
    this.fees = [];
    this.chainId = "";
    this.command.push("atomoned");
    this.command.push("tx");
    this.command.push("gov");
    this.command.push(action);
  }
  withChainId(chainId: string) {
    this.chainId = chainId;
    return this;
  }
  withSigner(address: string) {
    this.address = address;
    return this;
  }
  withFees(fees: Coin[]) {
    this.fees = fees;
    return this;
  }
  addParam(param: string) {
    this.command.push(param);
    return this;
  }
  finish() {
    this.command.push("--fees");
    let feeString = "";
    for (let i = 0; i < this.fees.length; i++) {
      feeString = feeString + this.fees[i].amount + this.fees[i].denom;
      if (i + 1 != this.fees.length) {
        feeString = feeString + ",";
      }
    }
    this.command.push(feeString);
    this.command.push("--generate-only");
    this.command.push("--from");
    this.command.push(this.address);
    this.command.push("--chain-id");
    this.command.push(this.chainId);
    this.command.push(">");
    this.command.push("tx.unsigned.json");
    return this.command.join(" ");
  }
}
