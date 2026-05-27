import styles from "./week.module.css"
import { getWeekDatesArray, day_names, turnDateToPath, turnPathToDate } from "../utils"

export default function Week(props: {view: string | undefined, date: string[] | undefined}) {

  function createWeekElemFromDate(date: Date){
    let current_week_dates = getWeekDatesArray(date);
    let weekElements = current_week_dates.map((val, idx) => {
      return (
        <div key={idx}>
          <h5>{day_names[idx].substring(0, 3)}</h5>
          {turnDateToPath(val) == turnDateToPath(new Date()) ? <h4 className={styles.activeDate}>{val.getDate()}</h4> : <h4>{val.getDate()}</h4>}
        </div>
      )
    });
    return weekElements;
  }

  let currentDate = new Date();
  if(props.date != undefined){
    currentDate = turnPathToDate(props.date);
  }
  let variable_week_elems = createWeekElemFromDate(currentDate);
  
  return (
    <>
      <div className={styles.dateContainer}>
        {variable_week_elems}
      </div>
      
    </>
  );
}