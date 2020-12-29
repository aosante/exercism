//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = date => {
    // gigasecond is the same as 10^9 seconds, or 10^12 miliiseconds
    const GIGASECOND_IN_MS = 10 ** 12, startingTime = date.getTime();
    const endDate = new Date(startingTime + GIGASECOND_IN_MS)
    return endDate
}
