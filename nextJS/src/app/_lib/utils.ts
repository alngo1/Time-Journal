//given a date, get the number of dates in that date's month
export function getTotalDatesinMonth(date: Date){
  let beginning_of_month = new Date(date.getFullYear(), date.getMonth(), 1);
  let beginning_of_next_month = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  let ms_in_month = Date.parse(beginning_of_next_month.toISOString()) - Date.parse(beginning_of_month.toISOString());
  let total_dates_in_month = new Date(ms_in_month).getDate();
  
  return(total_dates_in_month);
}

//given a date, create an array for all dates in that date's month's 7x6 block
export function getMonthBlockArray(date: Date){
  let beginning_of_month_day = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  let month_block_array = [];

  for(let i = 0; i < 42; i++){
    let ith_date = new Date(date.getFullYear(), date.getMonth(), i - beginning_of_month_day + 1);
    month_block_array.push(ith_date);
  }

  return month_block_array;
}

//get the dates of the week from the week of the given date
export function getWeekDatesArray(date: Date){
  let day_of_date = date.getDay();

  let week_dates_array = [];
  for(let i = 0; i < 7; i++){
    let ith_date = new Date(date.getFullYear(), date.getMonth(), date.getDate() - day_of_date + i);
    week_dates_array.push(ith_date.getDate());
  }

  return week_dates_array;
}

export const days_of_the_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
