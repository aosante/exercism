//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (x, y) => {
  if (isNaN(x) || isNaN(y)) return null;
  // distance to center is determined with pythagorean theorem
  const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  if (distance > 10) return 0;
  if (distance > 5) return 1;
  if (distance > 1) return 5;
  if (distance >= 0) return 10;
};

export const score2= (x, y) => {
  // distance to center is determined with pythagorean theorem
  const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  // favoring ternary epressions based on this article: https://medium.com/javascript-scene/nested-ternaries-are-great-361bddd0f340
  return (isNaN(x) || isNaN(y)) ? null :
  distance > 10 ? 0 :
  distance > 5 ? 1 : 
  distance > 1 ? 5 :
  10
}