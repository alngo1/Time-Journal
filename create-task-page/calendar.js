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

//Classes----------------------------------------------------------------------------------------------------------------------------------------------------------
class CalendarDate{
    constructor(year, month, month_day, week_day) {
        this._year = year; //[2025-2027]
        this._month = month; //[0-11] <-- "January-December"
        this._month_day = month_day; //[0-31]
        this._week_day = week_day; //[0-6] <-- "Sunday-Saturday"
    
    }

    //FIX THIS: Consider Automating a method to generate getters and setters for multiple items rather than manually typing out for each element
    get year(){
        return(this._year)
    }
    set year(value){
        return(this._year = value)
    }

    get month(){
        return(this._month)
    }
    set month(value){
        return(this._month = value)
    }

    get month_day(){
        return(this._month_day)
    }
    set month_day(value){
        return(this._month_day = value)
    }

    get week_day(){
        return(this._week_day)
    }
    set week_day(value){
        return(this._week_day = value)
    }

    //Other information that would be included in calendar
    //highlighted True/False
    //Task Object
}

//Helper Functions----------------------------------------------------------------------------------------------------------------------------------------------------------
//Updates new Date() to tomorrow's date
function update_to_tomorrow(today){
    let tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 1)
    return(tomorrow)
}

//Instantiates CalendarDate object
function create_current_calendar_day(today){
    let current_year = today.getFullYear()
    let current_month = today.getMonth()
    let current_month_day = today.getDate()
    let current_week_day = today.getDay()
    output_today = new CalendarDate(current_year, current_month, current_month_day, current_week_day)
    return(output_today)
}
let today = new Date()
let current_year = today.getFullYear()
let current_month = today.getMonth()
let current_month_day = today.getDate()
let current_week_day = today.getDay()
let current_day_hours = today.getHours()
let current_day_minutes = today.getMinutes()
let current_day_milliseconds = today.getMilliseconds()

current_day = new CalendarDate(current_year, current_month, current_month_day, current_week_day)

let calendar_epoch = new CalendarDate(2025, 11, 28, 0)  //epoch for 12/28/25, Sunday


let epoch = new Date(2025, 11, 28, current_day_hours, current_day_minutes, current_day_milliseconds)
let starting_epoch = new Date(epoch)
starting_epoch.setDate(epoch.getDate()-1)

// console.log(starting_epoch)
let newest_day = new Date(starting_epoch)
let month_count = 0

//Generating all calendars
let month_january = []
for (let i = 0; i < 6; i++){
    let week = []
    for (let j = 0; j < 7; j++){
        let next_day = update_to_tomorrow(newest_day)
        newest_day = next_day
        week.push(new Date(next_day))
    }
    month_january.push(week)
}

// console.log(starting_epoch.getDate() + 28)
newest_day.setDate(newest_day.getDate()-7)
console.log(newest_day)
let month_february = []
for (let i = 0; i < 6; i++){
    let week = []
    for (let j = 0; j < 7; j++){
        let next_day = update_to_tomorrow(newest_day)
        newest_day = next_day
        week.push(new Date(next_day))
    }
    month_february.push(week)
}

month_count += 1
console.log(month_january)
console.log(month_february)

function generate_month_group(){
    month_array = []
}