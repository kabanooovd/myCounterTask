import React from "react";
import s from './Counter.module.css'
import {CounterDisplay} from "./CounterParts/CounterDisplay/CounterDisplay";
import {RemoteCounter} from "./CounterParts/CounterRemote/RemoteCounter";

type CounterPropsType = {
    incVal: number
    initialVal: number
    setIncVal: (value: number) => void
    maxVal: number
}

export const Counter = (props: CounterPropsType) => {

    return(
        <div className={s.MainCounterShell}>
            <CounterDisplay incVal={props.incVal}
                            maxVal={props.maxVal}
            />

            <RemoteCounter incVal={props.incVal}
                           setIncVal={props.setIncVal}
                           maxVal={props.maxVal}
                           initialVal={props.initialVal}
            />
        </div>
    )
}









