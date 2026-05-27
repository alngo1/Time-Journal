import { month_names, day_names, getMonthBlockArray, turnDateToPath, turnPathToDate } from "../utils";
import { v7 as uuidv7 } from "uuid"
import Month from "../month/month";
import styles from "./year.module.css"

export default function Year(props: {view: string | undefined, date: string[] | undefined}) {

    function createYearElemFromDate(date: Date){
        let currentDate = date;
        let today = new Date(currentDate);
        let yearElement = [];
        let dayHeader = day_names.map((val, idx) => {
            return(
                <h5 key={idx}>{val.substring(0, 1)}</h5>
            );
        });

        //create the full year elem
        month_names.forEach((elem, idx) => {
            currentDate.setMonth(idx);
            //get the month block array for that thing
            let currentBlock = getMonthBlockArray(currentDate);
            //turn block array to elements
            //if date is same as today and elem == month name of the date (ensures not marking overlap with other month blocks)
            let monthDates = currentBlock.map((val, idx) => {
                return (
                    <div key={uuidv7()}>
                        {turnDateToPath(val) == turnDateToPath(today) && elem == month_names[val.getMonth()] ?
                            <h4 className={styles.activeDate}>{val.getDate()}</h4>
                            :
                            <h4>{val.getDate()}</h4>
                        }
                    </div>
                );
            });

            let fullMonthElem = 
                <div key={uuidv7()} className={styles.monthContainer}>
                    {elem}
                    <div className={styles.dateContainer}>
                        {dayHeader}
                        {monthDates}
                    </div>
                </div>

            yearElement.push(fullMonthElem);
        });
        return yearElement
    }

    let currentDate = new Date();
    if(props.date != undefined){
        currentDate = turnPathToDate(props.date);
    }
    let yearElem = createYearElemFromDate(currentDate);
    
    return (
        <>
            <h1>{currentDate.getFullYear()}</h1>
            <div className={styles.yearContainer}>
                {yearElem}
            </div>
        </>
    )
}