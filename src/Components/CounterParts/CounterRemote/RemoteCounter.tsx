import React, {useState} from "react";
import s from "./RemoteCounter.module.css";

type RemoteCounterPropsType = {
    incVal: number
    initialVal: number
    setIncVal: (value: number) => void
    setToBeSet: (value: boolean) => void
    maxVal: number
    toBeSet: boolean
    toDisableInput: boolean
    setToDisableInput: (toDisableInput: boolean) => void
    setToDisableSetBtn: (toDisableSetBtn: boolean) => void
}

export const RemoteCounter = (props: RemoteCounterPropsType) => {

    const IncreaseHandler = () => {
        if (props.incVal < props.maxVal) {
            props.setIncVal(props.incVal + 1)
        }
    }

    const ResetHandler = () => {
        props.setIncVal(props.initialVal)
        props.setToBeSet(false)
        props.setToDisableInput(!props.toDisableInput)
        props.setToDisableSetBtn(false)
    }

    const IncToDisabled = !props.toBeSet || (props.incVal === props.maxVal)
    const ResetToDisabled = (props.incVal === props.initialVal)

    const incBtnStyle = IncToDisabled? s.counterBtnStyleDisabled : s.counterBtnStyle
    const resetBtnStyle = ResetToDisabled? s.counterBtnStyleDisabled : s.counterBtnStyle

    return (
        <div className={s.remote}>
            <div className={s.btnPlace}>
                <button className={incBtnStyle}
                        onClick={IncreaseHandler}
                        disabled={IncToDisabled}
                >
                    Inc
                </button>
            </div>
            <div className={s.btnPlace}>
                <button className={resetBtnStyle}
                        onClick={ResetHandler}
                        disabled={ResetToDisabled}
                >
                    Reset
                </button>
            </div>
        </div>
    )
}





