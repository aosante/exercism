//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const SOUND_FOR_THREE = 'Pling'
const SOUND_FOR_FIVE = 'Plang'
const SOUND_FOR_SEVEN = 'Plong'

const isMultipleOf = (number, ...factors) =>
  factors.every((factor) => number % factor === 0)

/**
 *
 * @param {number} number
 * @returns {string} the rain drop sound
 */
export const convert = (number) =>
  isMultipleOf(number, 3, 5, 7)
    ? `${SOUND_FOR_THREE}${SOUND_FOR_FIVE}${SOUND_FOR_SEVEN}`
    : isMultipleOf(number, 3, 5)
    ? `${SOUND_FOR_THREE}${SOUND_FOR_FIVE}`
    : isMultipleOf(number, 5, 7)
    ? `${SOUND_FOR_FIVE}${SOUND_FOR_SEVEN}`
    : isMultipleOf(number, 3, 7)
    ? `${SOUND_FOR_THREE}${SOUND_FOR_SEVEN}`
    : isMultipleOf(number, 3)
    ? SOUND_FOR_THREE
    : isMultipleOf(number, 5)
    ? SOUND_FOR_FIVE
    : isMultipleOf(number, 7)
    ? SOUND_FOR_SEVEN
    : String(number)
