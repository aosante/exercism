//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const PLING = 'Pling'
const PLANG = 'Plang'
const PLONG = 'Plong'

const isMultipleOf = (number, ...factors) =>
  factors.every((factor) => number % factor === 0)

/**
 *
 * @param {number} number
 * @returns {string} the rain drop sound
 */
export const convert = (number) =>
  isMultipleOf(number, 3, 5, 7)
    ? `${PLING}${PLANG}${PLONG}`
    : isMultipleOf(number, 3, 5)
    ? `${PLING}${PLANG}`
    : isMultipleOf(number, 5, 7)
    ? `${PLANG}${PLONG}`
    : isMultipleOf(number, 3, 7)
    ? `${PLING}${PLONG}`
    : isMultipleOf(number, 3)
    ? PLING
    : isMultipleOf(number, 5)
    ? PLANG
    : isMultipleOf(number, 7)
    ? PLONG
    : String(number)
