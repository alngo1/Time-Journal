"use client"
import DateChanger from "../dateChanger/dateChanger";
import DateViewDropdown from "../dateViewDropdown/dateViewDropdown";
import { useParams } from "next/navigation";

export default function Header(){
    let {view, date}: {view: string, date: string[]} = useParams();

    return(
        <header>
            <DateViewDropdown
                view={view}
                date={date}
            />
            <DateChanger
                view={view}
                date={date}
            />
        </header>
    )
}