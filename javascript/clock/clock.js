// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
export class Clock {
  constructor(hours = 0, minutes = 0) {
    // the first argument of setHours() is ideally, an integer between 0 and 23, representing the hour. 
    // If a value greater than 23 is provided, the datetime will be incremented by the extra hours. (same thing happens for minutes) => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours
    this.time = new Date();
    this.time.setHours(hours)
    this.time.setMinutes(minutes)
  }

  setTwoDigits(value) {
    return value.toString().padStart(2, '0')
  }

  toString() {
    return `${this.setTwoDigits(this.time.getHours())}:${this.setTwoDigits(this.time.getMinutes())}`
  }

  plus(minutes = 0) {
    this.time.setMinutes(minutes + this.time.getMinutes())
    return this
  }

  minus(minutes = 0) {
      this.time.setMinutes(this.time.getMinutes() - minutes)
      return this
  }

  equals(otherTime) {
      return this.toString() === otherTime.toString()
  }
}


