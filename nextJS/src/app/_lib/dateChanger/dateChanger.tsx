import Link from "next/link";
import { turnPathToDate, turnDateToPath, getDateFromOffsetAndParams } from "../utils";

import styles from "./dateChanger.module.css"

export default function DateChanger(props: {view: string | undefined, date: string[] | undefined}){

    //once offset changes recalculate working date and add to url
    let prevDate = new Date();
    let nextDate = new Date();
    if(props.date != undefined){
        prevDate = turnPathToDate(props.date);
        nextDate = turnPathToDate(props.date);
    }
    prevDate = getDateFromOffsetAndParams(props.view, prevDate, -1); 
    nextDate = getDateFromOffsetAndParams(props.view, nextDate, 1);

    let prevHREF = "/";
    let nextHREF = "/";
    switch(props.view){
        case "day":
            prevHREF = "/day";
            nextHREF = "/day";
            break;
        case "week":
            prevHREF = "/week";
            nextHREF = "/week";
            break;
        case "month":
            prevHREF = "/month";
            nextHREF = "/month";
            break;
        case "year":
            prevHREF = "/year";
            nextHREF = "/year";
            break;
        default:
            prevHREF = "/week";
            nextHREF = "/week";
    }
    prevHREF += turnDateToPath(prevDate);
    nextHREF += turnDateToPath(nextDate);

    return(
        <div className={styles.buttonContainer}>
            <Link
                href={prevHREF}
                className={styles.countButtons}
            >
                prev
            </Link>
            <Link 
                href={nextHREF}
                className={styles.countButtons}
            >
                next
            </Link>
            <Link 
                href={"/" + props.view}
                className={styles.countButtons}
            >
                today
            </Link>
        </div>
    )
}