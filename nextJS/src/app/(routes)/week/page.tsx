import Image from "next/image";
import styles from "./page.module.css";
import next from "next";

function getTotalDatesinMonth(date: Date){
  let beginning_of_month = new Date(date.getFullYear(), date.getMonth(), 1);
  let beginning_of_next_month = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  let ms_in_month = Date.parse(beginning_of_next_month.toISOString()) - Date.parse(beginning_of_month.toISOString());
  let total_dates_in_month = new Date(ms_in_month).getDate();
  
  return(total_dates_in_month);
}

function getMonthDatesArray(date: Date){
  let beginning_of_month_day = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  let month_dates_array = [];

  for(let i = 0; i < 42; i++){
    let ith_date = new Date(date.getFullYear(), date.getMonth(), i - beginning_of_month_day + 1);
    month_dates_array.push(ith_date);
  }

  return month_dates_array;
}

//get the week from the date
function getWeekDatesArray(date: Date){
  let day_of_date = date.getDay();

  let week_dates_array = [];
  for(let i = 0; i < 7; i++){
    let ith_date = new Date(date.getFullYear(), date.getMonth(), date.getDate() - day_of_date + i);
    week_dates_array.push(ith_date.getDate());
  }

  return week_dates_array;
}

const days_of_the_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function Home() {

  const currentDate = new Date();

  let current_week_dates = getWeekDatesArray(currentDate);

  let weekElements = current_week_dates.map((val, idx) => {

    return (
      <div key={idx}>
        <h5>{days_of_the_week[idx].substring(0, 3)}</h5>
        {val == currentDate.getDate() ? <h4 className={styles.activeDate}>{val}</h4> : <h4>{val}</h4>}
      </div>
    )
  });
  
  return (
    <main className={styles.main}>
      <h1>{currentDate.toDateString()}</h1>
      <div className={styles.dateContainer}>
        {weekElements}
      </div>
      <form>
        <label>Task
          <input type="text"></input>
        </label>
      </form>
    </main>
  );
}

//read up on next server
//read up on sql