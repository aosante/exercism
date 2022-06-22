//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (sentence) => {
  // const r = stringOfWords.split(/[ ,]+/).map(word => word.replace(/'\B|[^a-z'? ]/g, ``))
  const  wordCount = {}
  sentence.match(/\b[\w']+\b/g).forEach(word => {
    const wordKey = word.toLowerCase()
    wordCount[wordKey] ? wordCount[wordKey]++ : wordCount[wordKey] = 1
  })
  return wordCount
};
