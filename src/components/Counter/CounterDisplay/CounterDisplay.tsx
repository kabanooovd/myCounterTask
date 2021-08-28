import React from 'react';
import s from './CounterDisplay.module.css'
import {useSelector} from "react-redux";
import {RootReducersType} from "../../../store/store";
import {CounterStateType} from "../../../reducers/counterReducer";

// background-color: #08081c;
// color: #0af54c;


export function CounterDisplay () {

    const CounterValue = useSelector<RootReducersType, CounterStateType>(state => state.counterReducer)

    const currentValStyle = CounterValue.currentValue === CounterValue.maxValue ? s.maxValStyle : ''

    return (
        <div className={s.CounterDisplayStile}>
            <div className={currentValStyle}>
                {CounterValue.currentValue}
            </div>
        </div>
    );
}


