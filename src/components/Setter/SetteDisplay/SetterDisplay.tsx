import React from 'react';
import s from './SetterDisplay.module.css'
import {NumInput} from "../../NumInput/NumInput";
import {useDispatch, useSelector} from "react-redux";
import {changeFinalValAC, changeInitValAC, SetterStateType} from "../../../reducers/setterReducer";
import {RootReducersType} from "../../../store/store";

// background-color: #08081c;
// color: #0af54c;

export function SetterDisplay () {

    const dispatch = useDispatch()

    const CurrentSetterVal = useSelector<RootReducersType, SetterStateType>(state => state.setterReducer)

    const changeFinalCounterValHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const setterFinalVal = +e.currentTarget.value
        dispatch(changeFinalValAC(setterFinalVal))
    }
    const changeInitCounterValHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const setterInitVal = +e.currentTarget.value
        dispatch(changeInitValAC(setterInitVal))
    }

    return (
        <div className={s.SetterDisplayStile}>
            <div className={s.SetterInputItemStile}>
                <div className={s.inputsPositionStyles}>
                    <span>Max value</span>

                    <NumInput value={CurrentSetterVal.finalCounterVal}
                              onChange={changeFinalCounterValHandler}
                    />


                </div>
            </div>
            <div className={s.SetterInputItemStile}>
                <div className={s.inputsPositionStyles}>
                    <span>Init value</span>

                    <NumInput value={CurrentSetterVal.initCounterVal}
                              onChange={changeInitCounterValHandler}
                    />


                </div>
            </div>
        </div>
    );
}


