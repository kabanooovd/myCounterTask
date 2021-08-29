import React from 'react';
import s from './CounterRemote.module.css'
import {SupperButton} from "../../SupperButton/SupperButton";
import {useDispatch, useSelector} from "react-redux";
//import {RootReducersType} from "../../../store/store";
import {incCountAC, resetCountAC} from "../../../reducers/counterReducer";
import {RootReducersType} from "../../../store/store";
import {SetterStateType} from "../../../reducers/setterReducer";

// background-color: #08081c;
// color: #0af54c;

export function CounterRemote () {

    const dispatch = useDispatch()
    const CounterStepValue = useSelector<RootReducersType, SetterStateType>(state => state.setterReducer).counterStep

    const ResetHandler = () => {
        dispatch(resetCountAC())
    }
    const IncHandler = () => {
        dispatch(incCountAC(CounterStepValue))
    }
    const SetValuesHandler = () => {
        dispatch({type: 'SET-APP-MODE', updateAppMode: 'setter'})

    }

    return (
        <div className={s.CounterRemoteStile}>
                <SupperButton buttonName={'RESET'} onClick={ResetHandler}/>
                <SupperButton buttonName={'INC'} onClick={IncHandler}/>
                <SupperButton buttonName={'SET'} onClick={SetValuesHandler}/>
        </div>
    );
}


