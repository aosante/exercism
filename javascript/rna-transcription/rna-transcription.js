//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const dnaToRnaMap = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
}

/**
 *
 * @param {string} dnaSequence
 * @returns {string} the dna's rna transcription sequence
 */
export const toRna = (dnaSequence) =>
  [...dnaSequence].map((nucleotide) => dnaToRnaMap[nucleotide]).join('')
