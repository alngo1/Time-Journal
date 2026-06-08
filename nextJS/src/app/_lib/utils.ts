//given a date, get the number of dates in that date's month
export function getTotalDatesinMonth(date: Date){
  let beginning_of_month = new Date(date.getFullYear(), date.getMonth(), 1);
  let beginning_of_next_month = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  let ms_in_month = Date.parse(beginning_of_next_month.toISOString()) - Date.parse(beginning_of_month.toISOString());
  let total_dates_in_month = new Date(ms_in_month).getDate();
  
  return(total_dates_in_month);
}

//given a date, create an array for all dates in that date's month's 7x6 block
export function getMonthBlockArray(date: Date): Date[]{
  let beginning_of_month_day = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  let month_block_array = [];

  for(let i = 0; i < 42; i++){
    let ith_date = new Date(date.getFullYear(), date.getMonth(), i - beginning_of_month_day + 1);
    month_block_array.push(ith_date);
  }

  return month_block_array;
}

//get the dates of the week from the week of the given date
export function getWeekDatesArray(date: Date): Date[]{
  let day_of_date = date.getDay();
  let week_dates_array = [];

  for(let i = 0; i < 7; i++){
    let ith_date = new Date(date.getFullYear(), date.getMonth(), date.getDate() - day_of_date + i);
    week_dates_array.push(ith_date);
  }

  return week_dates_array;
}

//given a date return a path including the year, month, and date (i.e. /2026/05/31 for May 31, 2026)
export function turnDateToPath(date: Date){
  let dateString = date.toISOString();
  let dateArray = dateString.split("-");
  // dateArray[1] = (Number(dateArray[1]) - 1).toString();
  dateArray[2] = dateArray[2].substring(0, 2);
  let path = "/" + dateArray.join("/")
  return path;
}

//given a path including the year, month, and date return a date (i.e. pathArr=['2026', '05', '31'])
export function turnPathToDate(pathArr: string[]){
  let date = new Date(Number(pathArr[0]), Number(pathArr[1]) - 1, Number(pathArr[2]));
  return date;
}

//given the current page view, date array, and an offset number representing some increment from the date
//return the calculated newdate
export function getDateFromOffsetAndParams(view: string, date: Date, offset: number){
  let newDate = date;
  switch(view){
      case "day":
          newDate.setDate(newDate.getDate() + (offset * 1));
          break;
      case "week":
          newDate.setDate(newDate.getDate() + (offset * 7));
          newDate.setDate(newDate.getDate() + (0-newDate.getDay()));
          break;
      case "month":
          newDate.setMonth(newDate.getMonth() + (offset * 1));
          newDate.setDate(1);
          break;
      case "year":
          newDate.setFullYear(newDate.getFullYear() + (offset * 1));
          break;
      default:
          break;
  }
  return newDate;
}

//checks if object is empty
export function isObjEmpty(obj){
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }

  return true;
}

export function validateEmail(email: string){
  let emailRegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(emailRegExp.test(email)){
    return true;
  }
  return false;
}

export function validatePassword(password: string){
  let passwordRegExp = /.{8}/;
  if(passwordRegExp.test(password)){
    return true;
  }
  return false;
}

export function validateEmailPasswordInputs(formData: FormData){
  let email = formData.get("email") as string;
  let password = formData.get("password") as string;

  if(validateEmail(email) && validatePassword(password)){
    return true;
  }
  return false;
}

export const day_names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const month_names = ["January","February","March","April","May","June","July","August","September","October","November","December"];