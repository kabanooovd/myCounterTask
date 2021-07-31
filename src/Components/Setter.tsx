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
            />
            <SetterRemote setToBeSet={props.setToBeSet}
                          setVisibleDisplay={setVisibleDisplay}
            />
        </div>
    )
}







