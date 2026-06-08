import { v7 as uuidv7 } from "uuid"
import styles from "./month.module.css"
import { getMonthBlockArray, month_names, day_names, turnDateToPath, turnPathToDate } from "../utils"
import Link from "next/link";

export default function Month(props: {view: string | undefined, date: string[] | undefined}) {

  function createMonthElemFromDate(date: Date){
    let current_month_dates: Date[] = getMonthBlockArray(date);
    let monthElements = current_month_dates.map((val, idx) => {
      return (
        <Link key={uuidv7()} href={"/day" + turnDateToPath(val)}>
          {turnDateToPath(val) == turnDateToPath(date) ?
            <h4 className={styles.activeDate}>{val.getDate()}</h4>
            :
            <h4>{val.getDate()}</h4>
          }
        </Link>
      );
    });

    return monthElements;
  }
  
  let dayHeader = day_names.map((val, idx) => {
    return(
      <h5 key={idx}>{val.substring(0, 3)}</h5>
    );
  });
  let currentDate = new Date();
  if(props.date != undefined){
    currentDate = turnPathToDate(props.date);
  }
  let variable_month_elems = createMonthElemFromDate(currentDate);

  return (
    <>
      <h1>{month_names[currentDate.getMonth()] + " " + currentDate.getFullYear()}</h1>
      <div className={styles.dateContainer}>
        {dayHeader}
        {variable_month_elems}
      </div>
      
    </>
  );
}