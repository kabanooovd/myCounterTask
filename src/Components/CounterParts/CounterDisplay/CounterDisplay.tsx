import React from "react";
import s from "./CounterDisplay.module.css";

type CounterDisplayPropsType = {
    incVal: number
    maxVal: number
    toBeSet: boolean
    error: boolean
    setError: (error: boolean) => void
}

export const CounterDisplay = (props: CounterDisplayPropsType) => {

    const Display = props.error? <div className={s.Error}>Error</div> : props.toBeSet? <h2>{props.incVal}</h2> : 'Press set'

    const displayValStyles = (props.incVal === props.maxVal)? s.theValMax : s.theVal

    const displayFrame = !props.error? s.counterValue : s.displayError

    return(
        <div className={displayFrame}>
            <div className={displayValStyles}>
                <div>{Display}</div>
            </div>
        </div>
    )
}






