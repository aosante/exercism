export const score = (x, y) => {
  // distance to center is determined with pythagorean theorem
  const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  // favoring ternary epressions based on this article: https://medium.com/javascript-scene/nested-ternaries-are-great-361bddd0f340
  return isNaN(x) || isNaN(y)
    ? null
    : distance > 10
    ? 0
    : distance > 5
    ? 1
    : distance > 1
    ? 5
    : 10;
};
