// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.

// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get

export class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  get validateInequality() {
    if (
      this.side1 + this.side2 < this.side3 ||
      this.side1 + this.side3 < this.side2 ||
      this.side2 + this.side3 < this.side1
    ) {
      return false;
    } else {
      return true;
    }
  }

  get validateSides() {
    if (this.side1 <= 0 || this.side2 <= 0 || this.side3 <= 0) {
      return false;
    } else {
      return true;
    }
  }

  get isEquilateral() {
    const isValid = this.validateInequality;
    const sidesAreValid = this.validateSides;
    if (!isValid) return false;
    if (!sidesAreValid) return false;
    if (
      this.side1 === this.side2 &&
      this.side2 === this.side3 &&
      this.side1 === this.side3
    ) {
      return true;
    } else {
      return false;
    }
  }

  get isIsosceles() {
    const isValid = this.validateInequality;
    const sidesAreValid = this.validateSides;
    if (!isValid) return false;
    if (!sidesAreValid) return false;
    if (
      this.side1 === this.side2 ||
      this.side2 === this.side3 ||
      this.side1 === this.side3
    ) {
      return true;
    } else {
      return false;
    }
  }

  get isScalene() {
    const isValid = this.validateInequality;
    const sidesAreValid = this.validateSides;
    if (!isValid) return false;
    if (!sidesAreValid) return false;
    if (
      this.side1 !== this.side2 &&
      this.side2 !== this.side3 &&
      this.side1 !== this.side3
    ) {
      return true;
    } else {
      return false;
    }
  }
}
