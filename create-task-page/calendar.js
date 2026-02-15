//Function to check if leap year. If the year is divisible by 4 it will be a leap year
//Constants
let months = {
    january: 31,
    feburary: 28,
    march: 31,
    april: 30,
    may: 31,
    june: 30,
    july: 31,
    august: 31,
    september: 30,
    october: 31,
    november: 30,
    december: 31
}

let months_leap = {
    january: 31,
    feburary: 29,
    march: 31,
    april: 30,
    may: 31,
    june: 30,
    july: 31,
    august: 31,
    september: 30,
    october: 31,
    november: 30,
    december: 31
}

days_of_week = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

class CalendarDate{
    constructor(year, month, month_day, week_day) {
        this.year = year; //[2025-2027]
        this.month = month; //[0-11] <-- "January-December"
        this.month_day = month_day; //[0-31]
        this.week_day = week_day; //[0-6] <-- "Sunday-Saturday"
    }
}
let epoch = new CalendarDate(2025, 11, 28, 0)  //epoch for 12/28/25, Sunday

let today = new Date()
let year = today.getFullYear()
let current_month = today.getMonth()
let current_month_day = today.getDate()
let current_week_day = today.getDay()
// year = today.now()
console.log(today)
console.log(year)
console.log(current_month)
console.log(current_month_day)
console.log(current_week_day)