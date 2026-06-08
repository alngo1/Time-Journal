import styles from "./week.module.css"
import { getWeekDatesArray, day_names, month_names, turnDateToPath, turnPathToDate } from "../utils"
import Link from "next/link";

export default function Week(props: {view: string | undefined, date: string[] | undefined}) {

  function createWeekElementsFromDate(date: Date){
    let current_week_dates = getWeekDatesArray(date);
    let weekElements = current_week_dates.map((val, idx) => {
      return (
        <Link key={idx} href={"/day" + turnDateToPath(val)}>
          <h5>{day_names[idx].substring(0, 3)}</h5>
          {turnDateToPath(val) == turnDateToPath(new Date()) ? <h4 className={styles.activeDate}>{val.getDate()}</h4> : <h4>{val.getDate()}</h4>}
        </Link>
      )
    });
    return weekElements;
  }

  let currentDate = new Date();
  if(props.date != undefined){
    currentDate = turnPathToDate(props.date);
  }
  //after creating a week array check each date and
  //if a date has a month different than the currentDate then its an in between week
  //display the earlier month then the later month
  let weekDateArray = getWeekDatesArray(currentDate);
  let diffMonth = currentDate.getMonth();
  for(const weekDate of weekDateArray){
    if(weekDate.getMonth() != currentDate.getMonth()){
      diffMonth = weekDate.getMonth();
      break;
    }
  }

  let weekHeader = month_names[currentDate.getMonth()];
  if(diffMonth > currentDate.getMonth()){
    weekHeader = month_names[currentDate.getMonth()] + "-" + month_names[diffMonth];
  }else if(diffMonth < currentDate.getMonth()){
    weekHeader = month_names[diffMonth] + "-" + month_names[currentDate.getMonth()];
  }

  let weekElements = createWeekElementsFromDate(currentDate);
  
  return (
    <>
      <h1>
        {weekHeader + " " + currentDate.getFullYear()}
      </h1>
      <div className={styles.dateContainer}>
        {weekElements}
      </div>
    </>
  );
}