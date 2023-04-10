//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
/**
 *
 * @param {string} strand1
 * @param {string} strand2
 *
 * @returns {number} the number of differences in the DNA strands
 */
export const compute = (strand1, strand2) => {
  if (strand1.length !== strand2.length)
    throw new Error('strands must be of equal length')

  const strand1Array = strand1.split('')
  const strand2Array = strand2.split('')

  return strand1Array.reduce(
    (accumulator, currentNucleotide, index) =>
      currentNucleotide !== strand2Array[index] ? accumulator + 1 : accumulator,
    0
  )
}
