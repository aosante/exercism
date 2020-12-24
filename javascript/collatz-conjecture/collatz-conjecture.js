//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = steps => {
  if (steps <= 0) throw new Error('Only positive numbers are allowed');
  let count = 0;
  let currentStep = steps;
  while (currentStep > 1) {
    currentStep = currentStep % 2 === 0 ? currentStep / 2 : currentStep * 3 + 1;
    count++;
  }
  return count;
};
