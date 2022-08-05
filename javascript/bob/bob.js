
const ALPHABETIC_REGEX = /[a-z]/i

const isYelling = (message) => ALPHABETIC_REGEX.test(message) && message.toUpperCase() === message
const isQuestion = (message) => message.endsWith('?')
const isYellingQuestion = (message) => isYelling(message) && isQuestion(message)
const isQuiet = (message) => message.length === 0

const responseList = [
  { messageTest: isYellingQuestion, messageResponse: 'Calm down, I know what I\'m doing!'},
  { messageTest: isQuestion, messageResponse: 'Sure.'},
  { messageTest: isYelling, messageResponse: 'Whoa, chill out!'},
  { messageTest: isQuiet, messageResponse: 'Fine. Be that way!'},
]

/**
 * Returns Bob's response based on the message provided
 * @param {string} message
 * @returns {string} bob's response to message
 */
export const hey = (message) => {
  let defaultResponse = 'Whatever.'
  const bobResponse = responseList.find(response => response.messageTest(message.trim()))?.messageResponse

  return bobResponse || defaultResponse
}
