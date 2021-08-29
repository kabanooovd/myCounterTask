import React from "react";
import s from "./SetterDisplay.module.css";
import {NumInput} from "../../NumInput/NumInput";


type SetterDisplayType = {
    stepValue: number
    stepOnChangeVal: (e: React.ChangeEvent<HTMLInputElement>) => void
    maxInputValue: number
    maxInputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    maxInputStep: number
    initInputValue: number
    initInputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    initInputStep: number
    initInputDisabled: boolean
    maxInputDisabled: boolean
    stepInputDisabled: boolean
}

export const SetterDisplay: React.FC<SetterDisplayType> = props => {

    const{
        stepValue,
        stepOnChangeVal,
        maxInputValue,
        maxInputOnChange,
        maxInputStep,
        initInputValue,
        initInputOnChange,
        initInputStep,
        stepInputDisabled,
        maxInputDisabled,
        initInputDisabled
    } = props

    return (
        <div className={s.SetterDisplayStile}>
            <div className={s.SetterInputItemStile}>
                <div className={s.inputsPositionStyles}>
                    <span>Set step</span>
                    <NumInput value={stepValue}
                              onChange={stepOnChangeVal}
                              step={1}
                              disabled={stepInputDisabled}
                    />
                </div>
            </div>
            <div className={s.SetterInputItemStile}>
                <div className={s.inputsPositionStyles}>
                    <span>Max value</span>
                    <NumInput value={maxInputValue}
                              onChange={maxInputOnChange}
                              step={maxInputStep}
                              disabled={maxInputDisabled}
                    />
                </div>
            </div>
            <div className={s.SetterInputItemStile}>
                <div className={s.inputsPositionStyles}>
                    <span>Init value</span>
                    <NumInput value={initInputValue}
                              onChange={initInputOnChange}
                              step={initInputStep}
                              disabled={initInputDisabled}
                    />
                </div>
            </div>
        </div>
    )
}
