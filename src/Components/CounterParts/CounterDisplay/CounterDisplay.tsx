import React from "react";
import s from "./CounterDisplay.module.css";

type CounterDisplayPropsType = {
    incVal: number
    maxVal: number
    toBeSet: boolean
}

export const CounterDisplay = (props: CounterDisplayPropsType) => {

    const displayValStyles = (props.incVal === props.maxVal)? s.theValMax : s.theVal

    return(
        <div className={s.counterValue}>
            <div className={displayValStyles}>
                {/*toBeSet? {props.incVal} : {'Press set'}*/}
                {props.toBeSet? props.incVal : 'Press set'}
            </div>
        </div>
    )
}






