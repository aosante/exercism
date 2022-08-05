
const isYelling = (message) => /[a-z]/i.test(message) && message.toUpperCase() === message // -> 'Whoa, chill out!'
const isQuestion = (message) => message.endsWith('?') // -> 'Sure.'
const isYellingQuestion = (message) => isYelling(message) && isQuestion(message) // -> 'Calm down, I know what I'm doing!'
const isQuiet = (message) => message.length === 0 // -> 'Fine. Be that way!'

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
