/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
export const getFirstCard = (deck) => deck.shift()

/**
 * Get the second card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the second card in the deck
 */
export const getSecondCard = (deck) => {
  const [secondCard] = deck.splice(1, 1)

  return secondCard
}
/**
 * Switch the position of the first two cards in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck with reordered cards
 */
export const swapTopTwoCards = (deck) => {
  [deck[0], deck[1]] = [deck[1], deck[0]];

  return deck
}

/**
 * Put the top card of the given deck into a separate discard pile
 *
 * @param {Card[]} deck
 *
 * @returns {[Card, Card[]]} the top card of the given
 * deck and a new deck containing all the other cards
 */
export const discardTopCard = (deck) => [deck[0], deck.slice(1)]

/** @type Card[] **/
const FACE_CARDS = ['jack', 'queen', 'king']

/**
 * Insert face cards into the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck where the second,
 * third, and fourth cards are the face cards
 */
export const insertFaceCards = (deck) => {
  if (!deck.length) deck[0] = undefined
  deck.splice(1, 0, ...FACE_CARDS)

  return deck
}
