import React from "react";
import s from "./CounterDisplay.module.css";

type CounterDisplayPropsType = {
    incVal: number
    maxVal: number
}

export const CounterDisplay = (props: CounterDisplayPropsType) => {

    const displayValStyles = (props.incVal === props.maxVal)? s.theValMax : s.theVal

    return(
        <div className={s.counterValue}>
            <div className={displayValStyles}>
                {props.incVal}
            </div>
        </div>
    )
}






