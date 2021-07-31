import React from "react";
import s from './SetterDisplay.module.css'

type SetterDisplayPropsType = {}

export const SetterDisplay = (props: SetterDisplayPropsType) => {

    return (
        <div className={s.setterValue}>
            <div className={s.InputsContainer}>
                <div className={s.inputWay}>
                    <div className={s.InputName}>Max Value: </div>
                    <div className={s.inputVal}><input type="number"/></div>
                </div>
                <div className={s.inputWay}>
                    <span className={s.InputName}>Start value: </span>
                    <div className={s.inputVal}><input type="number"/></div>
                </div>
            </div>
        </div>
    )
}








