import Dropdown from "../dropdown/Dropdown"
import Link from "next/link"
import { isObjEmpty } from "../utils"

export default function DateViewDropdown(props: {view: string | undefined, date: string[] | undefined}){
    let datePath = "";
    if(props.date != undefined){
        datePath += "/" + props.date.join("/");
    }

    let links = <ul>
        <li>
            <Link href={"/day" + datePath}>day</Link>
        </li>
        <li>
            <Link href={"/week" + datePath}>week</Link>
        </li>
        <li>
            <Link href={"/month" + datePath}>month</Link>
        </li>
        <li>
            <Link href={"/year" + datePath}>year</Link>
        </li>
    </ul>

    return(
        <Dropdown
            question={isObjEmpty(props.view) ? "week" : props.view}
            answer={links}
        />
    );
}