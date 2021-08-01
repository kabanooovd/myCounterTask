import React from "react";
import s from './Counter.module.css'
import {CounterDisplay} from "./CounterParts/CounterDisplay/CounterDisplay";
import {RemoteCounter} from "./CounterParts/CounterRemote/RemoteCounter";

type CounterPropsType = {
    incVal: number
    initialVal: number
    setIncVal: (value: number) => void
    maxVal: number
    toBeSet: boolean
    setToBeSet: (value: boolean) => void
    error: boolean
    toDisableInput: boolean
    setToDisableInput: (toDisableInput: boolean) => void
}

export const Counter = (props: CounterPropsType) => {

    return(
        <div className={s.MainCounterShell}>
            <CounterDisplay incVal={props.incVal}
                            maxVal={props.maxVal}
                            toBeSet={props.toBeSet}
                            error={props.error}
            />

            <RemoteCounter incVal={props.incVal}
                           setIncVal={props.setIncVal}
                           maxVal={props.maxVal}
                           initialVal={props.initialVal}
                           setToBeSet={props.setToBeSet}
                           toBeSet={props.toBeSet}
                           toDisableInput={props.toDisableInput}
                           setToDisableInput={props.setToDisableInput}

            />
        </div>
    )
}









