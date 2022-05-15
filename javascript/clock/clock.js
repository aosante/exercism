export class Clock {
  constructor(hours = 0, minutes = 0) {
    // the first argument of setHours() is ideally, an integer between 0 and 23, representing the hour.
    // If a value greater than 23 is provided, the datetime will be incremented by the extra hours.
    // (same thing happens for minutes) => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours
    this.minutes = minutes + hours * 60
  }

  setTwoDigits(value) {
    return value.toString().padStart(2, '0')
  }

  getHours() {
    const hours = Math.floor(this.minutes / 60)
    return this.setTwoDigits(((hours % 24) + 24) % 24)
  }

  getMinutes() {
    return this.setTwoDigits(((this.minutes % 60) + 60) % 60)
  }

  toString() {
    return `${this.getHours()}:${this.getMinutes()}`
  }
  plus(minutes) {
    this.minutes += minutes
    return this
  }
  minus(minutes) {
    this.minutes -= minutes
    return this
  }
  equals(clock) {
    return this.toString() == clock.toString()
  }
}
