export function wrapping(gifts: Array<String>): Array<String> {
  return gifts.map((gif) => {
    const giftWrap = "*".repeat(gif.length + 2);
    return `${giftWrap}\n*${gif}*\n${giftWrap}`;
  });
}
