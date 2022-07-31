import { readdir } from 'fs/promises'
import { promisify } from 'util'

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * @param min The minimum value of the range.
 * @param max The maximum value of the range.
 */
export function randint(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Returns the list of filenames in a directory, optionally filtered by extension
 * @param dir The directory to read.
 * @param ext The extension(s) to filter by.
 */
export async function filesIn(dir: string, ext?: string | string[]) {
    return (await readdir(dir)).filter(file => {
        if (!ext) return true

        if (typeof ext === 'string') {
            return file.endsWith(ext)
        } else {
            return ext.some(e => file.endsWith(e))
        }
    })
}

/**
 * console.log()'s the members of the array, joined.
 * @param arr The array to print.
 */
export function logRow(arr: any[]) {
    console.log(arr.map(arg => arg.toString()).join(''))
}

/**
 * Flushes the console with a given amount of newlines.
 * @param amount The amount of newlines to print.
 */
export function flush(amount?: number) {
    if (!amount) return console.log('')
    // Array.from({ length: amount }).forEach(() => console.log(''))
    for (let i = 0; i < amount; i++) { console.log('') }
}

/**
 * Yields the code for the provided milliseconds.
 * @param ms The amount of milliseconds to yield.
 * @async
 */
export async function wait(ms: number): Promise<number> {
    const t = Date.now()
    await promisify(setTimeout)(ms)
    return Date.now() - t
}

/**
 * Pads the string with spaces for the provided amount (or once)
 * @param str The string to pad
 * @param amount The amount of spaces to pad with
 */
export function pad(str: string, amount?: number) {
    const pad = ' '.repeat(amount ?? 1)
    return `${pad}${str}${pad}`
}

/**
 * Returns the array as a neatly formatted string.
 * @param arr The array to format.
 * @param listSymbol The symbol to use for the list.
 */
export function list(arr: any[], listSymbol: string = '-') {
    return arr.map(arg => `${listSymbol} ${arg.toString().trim()}`).join('\n')
}

export default { randint, filesIn, logRow, flush, wait, pad, list }
