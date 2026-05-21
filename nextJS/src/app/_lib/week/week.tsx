"use client"
import { useState } from "react"

import styles from "./week.module.css"
import { getWeekDatesArray, days_of_the_week } from "../utils"

export default function Week() {

  const [weekOffset, setWeekOffset] = useState(0);

  function buttonChangeWeekOffset(offset: number): void{
    setWeekOffset((prevState: number) => {
      return prevState + offset
    });
  }

  function buttonResetWeekOffset(): void{
    setWeekOffset(0);
  }

  function createWeekElemFromDateAndOffset(date: Date, offset: number): any{
    let currentDate = date;
    currentDate.setDate(currentDate.getDate() + (offset * 7));

    let current_week_dates = getWeekDatesArray(date);

    let weekElements = current_week_dates.map((val, idx) => {

      return (
        <div key={idx}>
          <h5>{days_of_the_week[idx].substring(0, 3)}</h5>
          {val == currentDate.getDate() && offset == 0 ? <h4 className={styles.activeDate}>{val}</h4> : <h4>{val}</h4>}
        </div>
      )
    });

    return weekElements;
  }

  const today = new Date();
  let variable_week_elems = createWeekElemFromDateAndOffset(today, weekOffset);
  
  return (
    <>
      <h1>{today.toDateString()}</h1>
      <div className={styles.buttonContainer}>
        <button 
          className={styles.weekOffsetButtons}
          onClick={() => {buttonChangeWeekOffset(-1)}}
        >
          prev
        </button>
        <button 
          className={styles.weekOffsetButtons}
          onClick={() => {buttonChangeWeekOffset(1)}}
        >
          next
        </button>
        <button 
          className={styles.weekOffsetButtons}
          onClick={() => {buttonResetWeekOffset()}}
        >
          today
        </button>
      </div>
      <div className={styles.dateContainer}>
        {variable_week_elems}
      </div>
      
    </>
  );
}