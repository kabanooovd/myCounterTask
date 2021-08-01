import React, {useState} from "react";
import s from './SetterDisplay.module.css'

type SetterDisplayPropsType = {
    maxVal: number
    initialVal: number
    incVal: number
    maxValCallBack: (value: number) => void
    minValCallBack: (value: number) => void
    visibleDisplay: boolean
    error: boolean
    toDisableInput: boolean
}

export const SetterDisplay = (props: SetterDisplayPropsType) => {


    const MaxValHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.maxValCallBack(Number(e.currentTarget.value))
    }

    const InitValHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.minValCallBack(Number(e.currentTarget.value))
    }

    const smartStartValue =  !props.visibleDisplay? props.incVal : props.initialVal

    const SettersInputStyles = props.error? s.inputStyleError : s.inputStyle

    return (
        <div className={s.setterValue}>
            <div className={s.InputsContainer}>
                <div className={s.inputWay}>
                    <div className={s.InputName}>
                        Max Value:
                    </div>
                    <div className={s.inputVal}>
                        <input type="number"
                               value={props.maxVal}
                               onChange={MaxValHandler}
                               className={SettersInputStyles}
                               disabled={props.toDisableInput}
                        />
                    </div>
                </div>
                <div className={s.inputWay}>
                    <span className={s.InputName}>
                        Start value:
                    </span>
                    <div className={s.inputVal}>
                        <input type="number"
                               value={smartStartValue}
                               onChange={InitValHandler}
                               className={SettersInputStyles}
                               disabled={props.toDisableInput}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}








