import React from "react";
import s from "./CounterDisplay.module.css";

type CounterDisplayPropsType = {
    incVal: number
    maxVal: number
    toBeSet: boolean
    error: boolean
}

export const CounterDisplay = (props: CounterDisplayPropsType) => {

    const Display = props.error? <div className={s.Error}>Error</div> : props.toBeSet? props.incVal : 'Press set'

    const displayValStyles = (props.incVal === props.maxVal)? s.theValMax : s.theVal

    const displayFrame = !props.error? s.counterValue : s.displayError

    return(
        <div className={displayFrame}>
            <div className={displayValStyles}>
                {/*<div>{props.toBeSet? props.incVal : 'Press set'}</div>*/}
                <div>{Display}</div>
            </div>
        </div>
    )
}






