// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export const cardTypeCheck = (stack, card) => {
  let sum = 0;
  stack.forEach((card_) => card_ === card && sum++);

  return sum;
};

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export const determineOddEvenCards = (stack, type) => {
  let sum = 0;

  for(const card of stack) {
    if (type && card % 2 === 0) sum++
    if(!type && card % 2 !== 0) sum++
  }

  return sum
};
