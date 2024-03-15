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

export function formatAmount(amount: string, precision: number) {
  const n = parseInt(amount) / 10 ** precision;
  return n.toLocaleString(undefined, { maximumFractionDigits: 6 });
}

/**
 * Verify input is a link
 *
 * @export
 * @param {string} link
 * @return
 */
export function isLink(link: string) {
  return /^https:\/\/\S+$/.test(link);
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
