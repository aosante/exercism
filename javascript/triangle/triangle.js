// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.

// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get

export class Triangle {
  #isValid
  #uniqueSides

  constructor(...sides) {
    this.sides = sides
    this.#isValid = this.#isValidTriangle()
    this.#uniqueSides = new Set(sides).size
  }

  #isValidTriangle() {
    const [side1, side2, side3] = this.sides.sort((a, b) => a - b)
    const hasPositiveSides = this.sides.every((side) => side > 0)
    const hasValidInequality = side1 + side2 >= side3
    return this.sides.length === 3 && hasPositiveSides && hasValidInequality
  }

  get isEquilateral() {
    // since all sides are the same, the set should remove duplicates and remain with only one value
    return this.#isValid && this.#uniqueSides === 1
  }

  get isIsosceles() {
    // since there are two side that are equal, the set should remove duplicates and remain with two sides or less (since equilateral triangles are also isosceles)
    return this.#isValid && this.#uniqueSides < 3
  }

  get isScalene() {
    // al sizes are different and unique, so the Set's size should remain 3
    return this.#isValid && this.#uniqueSides === 3
  }
}
