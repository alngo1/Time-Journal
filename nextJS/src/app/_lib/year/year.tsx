import { turnPathToDate } from "../utils";


export default function Year(props: {view: string | undefined, date: string[] | undefined}) {

    let currentDate = new Date();
    if(props.date != undefined){
        currentDate = turnPathToDate(props.date);
    }
    return (
        <h1>{currentDate.toDateString()}</h1>
    )
}