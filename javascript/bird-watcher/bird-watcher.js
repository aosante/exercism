// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export const totalBirdCount = (birdsPerDay) => birdsPerDay.reduce((acc, current) => acc + current, 0)

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export const birdsInWeek = (birdsPerDay, week) => {
  const weekCounts = chunkArray(birdsPerDay, 7)

  return totalBirdCount(weekCounts[week - 1])
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export const fixBirdCountLog = (birdsPerDay) => {
  birdsPerDay.forEach((_, i) =>  i % 2 === 0 && birdsPerDay[i]++)
  return birdsPerDay
}

// Utils
/**
 * 
 * @param {any[]} arr 
 * @param {number} chunk_size 
 * @returns an array of arrays of the given chunk size
 */
const chunkArray = (arr, chunk_size) => {
  var result = [];
  
  while (arr.length) {
    result.push(arr.splice(0, chunk_size))
  }

  return result;
}
