/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
/**
 * Determines wether the lasagna is done
 * @param {number} remainingTime
 * @returns {string} the cooking status of the lasagna
 */
export const cookingStatus = (remainingTime) => {
  return remainingTime === 0
    ? 'Lasagna is done.'
    : remainingTime > 0
    ? 'Not done, please wait.'
    : 'You forgot to set the timer.'
}

/**
 * Calculates the estimate total preparation time
 * @param {string[]} layers
 * @param {number} averagePrepTime
 * @returns {number}
 */
export const preparationTime = (layers, averagePrepTime = 2) =>
  layers.length * averagePrepTime

/**
 * Computes the amounts of noodles and sauce needed
 * @param {string[]} layers
 * @returns {Quantities} an object containing the count of sauce and noodles
 */
export const quantities = (layers) => {
  const ingredientQuantities = { noodles: 0, sauce: 0 }
  for (const layer of layers) {
    if (layer === 'noodles') ingredientQuantities[layer] += 50
    if (layer === 'sauce') ingredientQuantities[layer] += 0.2
  }

  return ingredientQuantities
}

/**
 * Adds the secret ingredient from friend's list to my list
 * @param {string[]} friendsList
 * @param {string[]} myList
 */
export const addSecretIngredient = (friendsList, myList) => {
  myList.push(friendsList[friendsList.length - 1])
}
