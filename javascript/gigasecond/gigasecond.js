//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = date => {
  const startingTime = date.getTime() / 1000; //gives you time in seconds
  const endDate = new Date((startingTime + Math.pow(10, 9)) * 1000); // Date constructor needs to have time back in miliseconds
  return endDate;
};
