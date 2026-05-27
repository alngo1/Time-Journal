"use client"
import './dropdown.module.css'
import { useState } from 'react'
import Image from 'next/image';

import styles from "./dropdown.module.css"

/*
Takes in these props:
question: string
answer: tsx
*/
export default function Dropdown(props){
    const [isExpanded, setIsExpanded] = useState(false);
    
    function handleDropdownClick(){
        setIsExpanded((prev) => !prev);
    }
    return(
        <button onClick={handleDropdownClick} className={styles.qaContainer}>
            <div className={styles.questionAndArrow}>
                {props.question}
                <Image 
                    src="/vercel.svg"
                    alt="dropdown vercel arrow"
                    width={10}
                    height={10}
                    className={styles.dropdownArrow}
                />
            </div>
            {isExpanded && props.answer}
        </button>
    )
}