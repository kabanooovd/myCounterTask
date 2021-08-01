import React from "react";
import s from './SetterRemote.module.css'

type SetterRemotePropsType = {
    setToBeSet: (value: boolean) => void
    setVisibleDisplay: (visibleDisplay: boolean) => void
    setToDisableInput: (toDisableInput: boolean) => void
    toDisableSetBtn: boolean
    setToDisableSetBtn: (toDisableSetBtn: boolean) => void
}

export const SetterRemote = (props: SetterRemotePropsType) => {

    const toSetValues = () => {
        props.setVisibleDisplay(true)
        props.setToBeSet(true)
        props.setToDisableInput(true)
        props.setToDisableSetBtn(!props.toDisableSetBtn)
    }

    const setButtonStyle = !props.toDisableSetBtn? s.setBtn : s.setBtnDisabled

    return(
        <div className={s.remote}>
            <div>
                <button className={setButtonStyle}
                        onClick={toSetValues}
                        disabled={props.toDisableSetBtn}
                >
                    SET
                </button>
            </div>
        </div>
    )
}









