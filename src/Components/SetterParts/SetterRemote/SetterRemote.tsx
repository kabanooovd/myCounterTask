import React from "react";
import s from './SetterRemote.module.css'

type SetterRemotePropsType = {
    setToBeSet: (value: boolean) => void
    setVisibleDisplay: (visibleDisplay: boolean) => void
    setToDisableInput: (toDisableInput: boolean) => void
}

export const SetterRemote = (props: SetterRemotePropsType) => {

    const toSetValues = () => {
        props.setVisibleDisplay(true)
        props.setToBeSet(true)
        props.setToDisableInput(true)
    }

    return(
        <div className={s.remote}>
            <div>
                <button className={s.setBtn}
                        onClick={toSetValues}
                >
                    SET
                </button>
            </div>
        </div>
    )
}









