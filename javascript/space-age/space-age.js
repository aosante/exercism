//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const PLANET_YEARS = {
  earth: 1.0,
  jupiter: 11.862615,
  mercury: 0.2408467,
  mars: 1.8808158,
  neptune: 164.79132,
  saturn: 29.447498,
  uranus: 84.016846,
  venus: 0.61519726,
}

const EARTH_YEAR_IN_SECONDS = 31557600

/**
 * Calculates the age of someone living in another planet given an age in seconds
 * @param {string} planet
 * @param {number} secondsOld
 * @returns {number} the age in the given planet
 */
export const age = (planet, secondsOld) =>
  parseFloat(
    (secondsOld / EARTH_YEAR_IN_SECONDS / PLANET_YEARS[planet]).toFixed(2)
  )
