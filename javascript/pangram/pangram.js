//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('')

/**
 *
 * @param {string} sentence
 * @returns {boolean} wether the sentence is or is not a pangram
 */
export const isPangram = (sentence) =>
  ALPHABET.every((letter) =>
    sentence
      .toLowerCase()
      .replace(/[^a-z]/gi, '')
      .includes(letter)
  )
