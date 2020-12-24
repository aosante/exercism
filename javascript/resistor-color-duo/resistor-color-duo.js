//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = colorArray => {
  const firstDigit = COLORS.indexOf(colorArray[0]);
  const secondDigit = COLORS.indexOf(colorArray[1]);
  return parseInt(`${firstDigit}${secondDigit}`);
};

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
];
