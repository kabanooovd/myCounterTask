import React from 'react';
import s from './Setter.module.css'
import {SetterDisplay} from "./SetteDisplay/SetterDisplay";
import {SetterRemote} from "./SetterRemote/SetterRemote";

// background-color: #08081c;
// color: #0af54c;

export function Setter () {
    return (
        <div className={s.MainSetterWrapper}>
            <SetterDisplay />
            <SetterRemote />
        </div>
    );
}


