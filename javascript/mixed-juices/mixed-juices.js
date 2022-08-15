// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

const MINUTES_PER_JUICE = {
  'Pure Strawberry Joy': 0.5,
  Energizer: 1.5,
  'Green Garden': 1.5,
  'Tropical Island': 3,
  'All or Nothing': 5,
  other: 2.5,
}

const LIMES_TO_WEDGES = {
  small: 6,
  medium: 8,
  large: 10,
}

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export const timeToMixJuice = (name) =>
  MINUTES_PER_JUICE[name] || MINUTES_PER_JUICE.other
/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export const limesToCut = (wedgesNeeded, limes) => {
  let limeCount = 0,
    wedgesCount = 0

  if (limes.length < 1) return 0
  while (wedgesCount < wedgesNeeded && limes[limeCount]) {
    wedgesCount += LIMES_TO_WEDGES[limes[limeCount]]
    limeCount++
  }

  return limeCount
}
/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export const remainingOrders = (timeLeft, orders) => {
  throw new Error('Please implement the remainingOrders function')
}
