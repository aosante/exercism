//
// This is only a SKELETON file for the 'Meetup' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Note that "monteenth", "tuesteenth", etc are all made up words. There was a meetup whose members realized that there are exactly 7 numbered days in a month that end in '-teenth'. Therefore, one is guaranteed that each day of the week (Monday, Tuesday, ...) will have exactly one date that is named with '-teenth' in every month.

// In JavaScript, the Date object month's index ranges from 0 to 11.

// const date = new Date('2020-06-13');
// date.getFullYear();
// // => 2020
// date.getMonth();
// // => 5 (instead of 6)
// date.getDate();
// // => 13

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

export const meetup = (year, month, nth, day) =>  {
  const numberOfDaysInMonth = new Date(year, month, 0).getDate();

   // meetupDays stores all the dates of the month for the passed in day e.g. all Mondays in that month
   let meetupDays = [];
   [...Array(numberOfDaysInMonth).keys()].forEach((dayIndex) => {
     if (new Date(year, month - 1, dayIndex + 1).getDay() === weekdays.indexOf(day)) {
      meetupDays.push(dayIndex + 1)
     }
   })

  const nthToIndexMap = {
    first: 0, 
    second: 1, 
    third: 2, 
    fourth: 3,
    last : meetupDays.length - 1
   }

   const teenthDay = meetupDays.find(date => date > 12)
   
   const resultingDay = meetupDays[nthToIndexMap[nth]] || teenthDay
   return new Date(year, month - 1, resultingDay)
}