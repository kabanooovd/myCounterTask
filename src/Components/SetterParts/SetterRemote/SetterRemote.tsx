import React from "react";
import s from './SetterRemote.module.css'

type SetterRemotePropsType = {

}

export const SetterRemote = (props: SetterRemotePropsType) => {

    return(
        <div className={s.remote}>
            <div>
                <button className={s.setBtn}>SET</button>
            </div>
        </div>
    )
}









