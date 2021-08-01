import React, {useState} from "react";
import s from "./Setter.module.css";
import {SetterDisplay} from "./SetterParts/SetterDisplay/SetterDisplay";
import {SetterRemote} from "./SetterParts/SetterRemote/SetterRemote";


type SetterPropsType = {
    maxVal: number
    initialVal: number
    incVal: number
    maxValCallBack: (value: number) => void
    minValCallBack: (value: number) => void
    setToBeSet: (value: boolean) => void
    error: boolean
    toDisableInput: boolean
    setToDisableInput: (toDisableInput: boolean) => void
    toDisableSetBtn: boolean
    setToDisableSetBtn: (toDisableSetBtn: boolean) => void
}

export const Setter = (props: SetterPropsType) => {

    const [visibleDisplay, setVisibleDisplay] = useState<boolean>(false)


    return(
        <div className={s.MainSetterShell}>
            <SetterDisplay maxVal={props.maxVal}
                           initialVal={props.initialVal}
                           incVal={props.incVal}
                           maxValCallBack={props.maxValCallBack}
                           minValCallBack={props.minValCallBack}
                           visibleDisplay={visibleDisplay}
                           error={props.error}
                           toDisableInput={props.toDisableInput}
            />
            <SetterRemote setToBeSet={props.setToBeSet}
                          setVisibleDisplay={setVisibleDisplay}
                          setToDisableInput={props.setToDisableInput}
                          toDisableSetBtn={props.toDisableSetBtn}
                          setToDisableSetBtn={props.setToDisableSetBtn}
            />
        </div>
    )
}







