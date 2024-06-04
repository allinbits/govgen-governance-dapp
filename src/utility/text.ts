import { Coin } from "@cosmjs/proto-signing";
import chainConfig from "@/chain-config.json";

export function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function shorten(text: string) {
  if (text.length <= 20) {
    return text;
  } else {
    return text.slice(0, 8) + "..." + text.slice(-8);
  }
}
export function totalAmounts(amount: Coin[]): string {
  const amounts = new Map<string, bigint>();
  for (let i = 0; i < amount.length; i++) {
    amounts.set(amount[i].denom, (amounts.get(amount[i].denom) ?? BigInt(0)) + BigInt(amount[i].amount));
  }

  let total = "";
  let first = true;
  for (const entry of amounts.entries()) {
    const denom = chainConfig.currencies.filter((x) => x.coinMinimalDenom == entry[0]);
    let displayAmount = "";
    let displayDenom = "";
    if (denom) {
      displayAmount = formatAmount(entry[1].toString(), denom[0].coinDecimals);
      displayDenom = denom[0].coinDenom;
    } else {
      displayAmount = entry[1].toString();
      displayDenom = entry[0];
    }
    if (first) {
      total = displayAmount + displayDenom;
      first = false;
    } else {
      total = total + " + " + displayAmount + displayDenom;
    }
  }
  if (total == "") {
    total = "-";
  }
  return total;
}
export function formatAmount(amount: string | number | undefined, precision: number) {
  const n = parseInt(amount?.toString() ?? "0") / 10 ** precision;
  return n.toLocaleString(undefined, { maximumFractionDigits: 6 });
}

export function decToPerc(dec: string | number, prec: number) {
  return (parseFloat(dec.toString()) * 100).toFixed(prec);
}
/**
 * Verify input is a link
 *
 * @export
 * @param {string} link
 * @return
 */
export function isLink(link: string) {
  return /^(https?):\/\/(([a-z\d]([a-z\d-]*[a-z\d])?\.)+[a-z]{2,}|localhost)(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(#[-a-z\d_]*)?$/i.test(
    link,
  );
}

/**
 * Extract all links from raw html
 *
 * @param rawHtml
 */
export function getLinks(rawHtml: string): string[] {
  const doc = document.createElement("html");
  doc.innerHTML = rawHtml;
  const links = doc.getElementsByTagName("a");
  const urls: string[] = [];
  for (let i = 0; i < links.length; i++) {
    const link = links[i].getAttribute("href");
    if (!link) {
      continue;
    }

    urls.push(link);
  }

  return urls;
}
