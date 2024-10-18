import { Coin } from "@atomone/atomone-types/cosmos/base/v1beta1/coin";

export default class CommandBuilder {
  private command: string[];
  private address: string;
  private fees: Coin[];
  private chainId: string;
  private sequence: number;

  static Delegate() {
    const builder = new CommandBuilder("staking");
    return builder.withAction("delegate");
  }
  static Redelegate() {
    const builder = new CommandBuilder("staking");
    return builder.withAction("redelegate");
  }
  static Undelegate() {
    const builder = new CommandBuilder("staking");
    return builder.withAction("unbond");
  }
  static ClaimRewards(validator: string) {
    const builder = new CommandBuilder("distribution");
    return builder.withAction("withdraw-rewards").addParam(validator);
  }
  static ClaimAllRewards() {
    const builder = new CommandBuilder("distribution");
    return builder.withAction("withdraw-all-rewards");
  }

  constructor(module: string) {
    this.command = [];
    this.address = "";
    this.fees = [];
    this.chainId = "";
    this.sequence = 0;
    this.command.push("atomoned");
    this.command.push("tx");
    this.command.push(module);
  }
  withAction(action: string) {
    this.command.push(action);
    return this;
  }
  withChainId(chainId: string) {
    this.chainId = chainId;
    return this;
  }
  withSequence(sequence: number) {
    this.sequence = sequence;
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
  addAmountParam(amount: Coin) {
    this.command.push(amount.amount + amount.denom);
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
    this.command.push("--gas");
    this.command.push("auto");
    this.command.push("--sequence");
    this.command.push(this.sequence.toString());
    this.command.push(">");
    this.command.push("tx.unsigned.json");
    return this.command.join(" ");
  }
}
