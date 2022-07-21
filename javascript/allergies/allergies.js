const ALLERGIES = [
  'eggs',
  'peanuts',
  'shellfish',
  'strawberries',
  'tomatoes',
  'chocolate',
  'pollen',
  'cats',
]

export class Allergies {
  constructor(score = 0) {
    this.score = score
    this.resultingAllergies = this.list()
  }
  list() {
    // toString(2) converts the score into binary so we can
    return this.score
      .toString(2)
      .split('')
      .reverse()
      .map((item, index) => item === '1' && ALLERGIES[index])
      .filter((item) => Boolean(item))
  }
  allergicTo(allergen) {
    return this.resultingAllergies.includes(allergen)
  }
}
