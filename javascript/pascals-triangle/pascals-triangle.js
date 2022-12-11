// compute a pascal's triangle by adding the the numbers to the right and
// left of the current position in the previous row.

/**
 * Generates a Pascal's Triangle based on a given # of rows
 * @param {number} numberOfRows
 * @returns {number[][]} an array of arrays representing pascal's triangle
 */
export const rows = (numberOfRows) => {
  let pascalTriangle = []

  switch (numberOfRows) {
    case 0:
      pascalTriangle = []
      break
    case 1:
      pascalTriangle = [[1]]
      break
    case 2:
      pascalTriangle = [[1], [1, 1]]
      break
    case 3:
      pascalTriangle = [[1], [1, 1], [1, 2, 1]]
      break
    default:
      if (numberOfRows > 2) pascalTriangle = [[1], [1, 1], [1, 2, 1]]
      for (let i = 3; i < numberOfRows; i++) {
        const previousRow = pascalTriangle[pascalTriangle.length - 1]
        let newRow = []
        // generate next row for triangle
        for (let j = 0; j < previousRow.length; j++) {
          if (previousRow[j - 1] === undefined) {
            newRow.push(1)
          } else {
            newRow.push(previousRow[j] + previousRow[j - 1])
          }
        }

        newRow.push(1)
        pascalTriangle.push(newRow)
      }
      break
  }

  return pascalTriangle
}
