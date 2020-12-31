//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// TODO, try and do this with reduce
export const isArmstrongNumber = num => {
  const stringNumber = num.toString();
  const numberOfDigits = stringNumber.length;
  let sum = 0;
  if (num === 0 || numberOfDigits === 1) return true;
  if (numberOfDigits === 2) return false;
  for(const digit of stringNumber) {
    sum += Math.pow(digit, numberOfDigits);
  }
  return sum === num;
};

