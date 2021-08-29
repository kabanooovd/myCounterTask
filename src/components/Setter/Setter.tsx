import React from 'react';
import s from './Setter.module.css'
import {SetterDisplayContainer} from "./SetteDisplay/SetterDisplayContainer";
import {SetterRemote} from "./SetterRemote/SetterRemote";

// background-color: #08081c;
// color: #0af54c;

export function Setter () {
    return (
        <div className={s.MainSetterWrapper}>
            <SetterDisplayContainer />
            <SetterRemote />
        </div>
    );
}


