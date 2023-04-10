//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrix) {
    this._rows = matrix.split('\n').map((row) => row.split(' ').map(Number))
  }

  get rows() {
    return this._rows
  }

  get columns() {
    return this._rows[0].map((_, column) =>
      this._rows.map((row) => row[column])
    )
  }
}

// Another implementation for obtaining the columns
//  let columns = []
//   rows[0].forEach((_, rowIndex) => {
//     column = rows.map((row) => row[rowIndex])
//     columns.push(column)
//   })

//   return columns
