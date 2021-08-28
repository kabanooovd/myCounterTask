import React from 'react';
import s from './SetterRemote.module.css'
import {SupperButton} from "../../SupperButton/SupperButton";
import {useDispatch, useSelector} from "react-redux";
import {RootReducersType} from "../../../store/store";
import {changeCounterRangeAC, resetCountAC} from "../../../reducers/counterReducer";
import {SetterStateType} from "../../../reducers/setterReducer";


// background-color: #08081c;
// color: #0af54c;

export function SetterRemote () {

    const dispatch = useDispatch()

    const setterData = useSelector<RootReducersType, SetterStateType>(state => state.setterReducer )

    const updateCounterState = () => {
        dispatch({type: 'ZERO-SETTER'})
    }

    const setCounterParams = () => {
        dispatch(changeCounterRangeAC(setterData.initCounterVal, setterData.finalCounterVal))
        dispatch(resetCountAC())
        dispatch({type: 'SET-APP-MODE', updateAppMode: 'counter'})
    }

    return (
        <div className={s.CounterRemoteStile}>
                <SupperButton buttonName={'ZERO'}
                              onClick={updateCounterState}
                />
                <SupperButton buttonName={'START'}
                              onClick={setCounterParams}
                />
        </div>
    );
}


