/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * @param min The minimum value of the range.
 * @param max The maximum value of the range.
 */
export function randint(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default { randint }
