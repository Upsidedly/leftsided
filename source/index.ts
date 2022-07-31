import { readdir } from 'fs/promises'

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

export default { randint, filesIn }
