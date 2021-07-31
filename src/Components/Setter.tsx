import React from "react";
import s from "./Setter.module.css";
import {SetterDisplay} from "./SetterParts/SetterDisplay/SetterDisplay";
import {SetterRemote} from "./SetterParts/SetterRemote/SetterRemote";


type SetterPropsType = {

}

export const Setter = (props: SetterPropsType) => {

    return(
        <div className={s.MainSetterShell}>
            <SetterDisplay />
            <SetterRemote />
        </div>
    )
}







