// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export const seeingDouble = (deck) => deck.map((card) => card * 2)

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export const threeOfEachThree = (deck) =>
  deck.reduce((result, card) => {
    // @ts-ignore
    card === 3 ? result.push(3, 3, 3) : result.push(card)

    return result
  }, [])

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export const middleTwo = (deck) => deck.slice(4, 6)

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export const sandwichTrick = (deck) => {
  const last = deck.pop()
  const first = deck.shift()
  const mid = deck.length / 2
  // @ts-ignore
  deck.splice(mid, 0, last, first)

  return deck
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
// @ts-ignore
export const twoIsSpecial = (deck) => deck.filter((card) => card === 2)

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
// @ts-ignore
export const perfectlyOrdered = (deck) => deck.sort((a, b) => a - b)

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
// @ts-ignore
export const reorder = (deck) => deck.reverse()
