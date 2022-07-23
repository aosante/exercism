// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines whether or not you need a licence to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
const KIND_OF_VEHICLES_REQUIRING_LICENSE = ['car', 'truck']

export const needsLicense = (kind) =>
  KIND_OF_VEHICLES_REQUIRING_LICENSE.includes(kind)

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export const chooseVehicle = (option1, option2) => {
  const betterChoice = option1 <= option2 ? option1 : option2
  return `${betterChoice} is clearly the better choice.`
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns expected resell price in the dealership
 */
export const calculateResellPrice = (originalPrice, age) => {
  let resellPrice
  if (age < 3) resellPrice = originalPrice * 0.8
  if (age > 10) resellPrice = originalPrice * 0.5
  if (age >= 3 && age <= 10) resellPrice = originalPrice * 0.7

  return resellPrice
}
