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
