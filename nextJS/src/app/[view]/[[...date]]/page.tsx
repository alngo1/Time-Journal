"use client"
import { useParams } from "next/navigation";

import Year from "../../_lib/year/year";
import Month from "../../_lib/month/month";
import Week from "../../_lib/week/week";
import Day from "../../_lib/day/day";

import styles from "./page.module.css"

export default function Home(){
    const {view, date}: {view: string | undefined, date: string[] | undefined} = useParams();

    let dateView = <></>;
    switch(view){
        case "day":
            dateView = <Day view={view} date={date}/>;
            break;
        case "week":
            dateView = <Week view={view} date={date}/>
            break;
        case "month":
            dateView = <Month view={view} date={date}/>
            break;
        case "year":
            dateView = <Year view={view} date={date}/>
            break;
        default:
            dateView = <></> 
    }

    return(
        <>
            <main>
                {dateView}
            </main>
        </>
    )
}