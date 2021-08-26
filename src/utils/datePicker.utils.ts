export class Day {

  public readonly Date: Date
  public readonly date: number
  public readonly day: string
  public readonly dayNumber: number
  public readonly dayShort: string
  public readonly year: number
  public readonly shortYear: number
  public readonly month: string
  public readonly shortMonth: string
  public readonly timestamp: number
  public readonly week: number
  public readonly monthNumber: number

  private getWWeekNumber(date: Date): number {
    const firstDayOfTheYear = new Date(date.getFullYear(), 0, 1)
    const pastDaysOfYear = (date.getTime() - firstDayOfTheYear.getTime()) / 86400000
    return Math.ceil((pastDaysOfYear + firstDayOfTheYear.getDay() + 1) / 7)
  }

  constructor(date: null | Date = null, lang: string | string[] = 'default') {
    date = date ?? new Date()

    this.Date = date
    this.date = date.getDate()
    this.day = date.toLocaleString(lang, { weekday: 'long' })
    this.dayNumber = date.getDay() + 1
    this.dayShort = date.toLocaleString(lang, { weekday: 'short' })
    this.year = date.getFullYear()
    this.shortYear = Number(date.toLocaleString(lang, { year: '2-digit' }))
    this.month = date.toLocaleString(lang, { month: 'long' })
    this.shortMonth = date.toLocaleString(lang, { month: 'short' })
    this.timestamp = date.getTime()
    this.week = this.getWWeekNumber(date)
    this.monthNumber = date.getMonth() + 1

  }

  public formatString(formatStr: any) {
    return formatStr
      .replace(/\bYYYY\b/, this.year)
      .replace(/\bYYY\b/, this.shortYear)
      .replace(/\bWW\b/, this.week.toString().padStart(2, '0'))
      .replace(/\bW\b/, this.week)
      .replace(/\bDDDD\b/, this.day)
      .replace(/\bDDD\b/, this.dayShort)
      .replace(/\bDD\b/, this.date.toString().padStart(2, '0'))
      .replace(/\bD\b/, this.date)
      .replace(/\bMMMM\b/, this.month)
      .replace(/\bMMM\b/, this.shortMonth)
      .replace(/\bMM\b/, this.monthNumber.toString().padStart(2, '0'))
      .replace(/\bM\b/, this.monthNumber)
  }

  get isToday() {
    return this.isEqualTo(new Date())
  }

  public isEqualTo(date: Date): boolean {
    return date.getDate() === this.date &&
      date.getMonth() === this.monthNumber - 1 &&
      date.getFullYear() === this.year
  }
}

// tslint:disable-next-line: max-classes-per-file
export class Month {
  public readonly lang: string
  public readonly name: string
  public readonly monthNumber: number
  public readonly year
  public readonly numberOfDays: number

  public isLeapYear(year: number) {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0
  }

  constructor(date: Date | null, lang = 'default') {
    const day = new Day(date, lang)
    const monthsSize = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    this.lang = lang
    this.name = day.month
    this.monthNumber = day.monthNumber
    this.year = day.year
    this.numberOfDays = monthsSize[this.monthNumber - 1]

    if (this.monthNumber === 2) {
      this.numberOfDays += this.isLeapYear(day.year) ? 1 : 0
    }



  }
}

// (int) The current year
export const THIS_YEAR = +(new Date().getFullYear())

// (int) The current month starting from 1 - 12
// 1 => January, 12 => December
export const THIS_MONTH = +(new Date().getMonth()) + 1

// Week days names and shortnames
export const WEEK_DAYS = {
  Sunday: 'Sun',
  Monday: 'Mon',
  Tuesday: 'Tue',
  Wednesday: 'Wed',
  Thursday: 'Thu',
  Friday: 'Fri',
  Saturday: 'Sat'
}

// Calendar months names and shortnames
export const CALENDAR_MONTHS = {
  January: 'Jan',
  February: 'Feb',
  March: 'Mar',
  April: 'Apr',
  May: 'May',
  June: 'Jun',
  July: 'Jul',
  August: 'Aug',
  September: 'Sep',
  October: 'Oct',
  November: 'Nov',
  December: 'Dec'
}

// Weeks displayed on calendar
export const CALENDAR_WEEKS = 6

// Pads a string value with leading zeroes(0) until length is reached
// For example: zeroPad(5, 2) => "05"
export const zeroPad = (value: any, length: any) => {
  return `${value}`.padStart(length, '0')
}

// (int) Number days in a month for a given year from 28 - 31
export const getMonthDays = (month = THIS_MONTH, year = THIS_YEAR) => {
  const months30 = [4, 6, 9, 11]
  const leapYear = year % 4 === 0

  return month === 2
    ? leapYear
      ? 29
      : 28
    : months30.includes(month)
      ? 30
      : 31
}

// (int) First day of the month for a given year from 1 - 7
// 1 => Sunday, 7 => Saturday
export const getMonthFirstDay = (month = THIS_MONTH, year = THIS_YEAR) => {
  return +(new Date(`${year}-${zeroPad(month, 2)}-01`).getDay()) + 1
}

// class Month {
//   constructor(date = null, lang = 'default') {
//     const day = new Day(date, lang);
    // const monthsSize = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    // this.lang = lang;

//     this.name = day.month;
//     this.number = day.monthNumber;
//     this.year = day.year;
//     this.numberOfDays = monthsSize[this.number - 1];

//     if(this.number === 2) {
//       this.numberOfDays += isLeapYear(day.year) ? 1 : 0;
//     }

//     this[Symbol.iterator] = function* () {
//       let number = 1;
//       yield this.getDay(number);
//       while(number < this.numberOfDays) {
//         ++number;
//         yield this.getDay(number);
//       }
//     }
//   }

//   getDay(date) {
//     return new Day(new Date(this.year, this.number - 1, date), this.lang);
//   }
// }