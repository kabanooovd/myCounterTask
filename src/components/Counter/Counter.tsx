import React from 'react';
import s from './Counter.module.css'
import {CounterDisplay} from "./CounterDisplay/CounterDisplay";
import {CounterRemote} from "./CounterRemote/CounterRemote";

// background-color: #08081c;
// color: #0af54c;

export function Counter () {
    return (
        <div className={s.MainCounterWrapper}>
            <CounterDisplay />
            <CounterRemote />
        </div>
    );
}


