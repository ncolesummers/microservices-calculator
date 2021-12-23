export default function isNumber(item: number): boolean {
  return /[0-9]+/.test(item.toString());
}