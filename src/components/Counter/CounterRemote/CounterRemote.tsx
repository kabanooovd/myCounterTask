import React from 'react';
import s from './CounterRemote.module.css'
import {SupperButton} from "../../SupperButton/SupperButton";
import {useDispatch, useSelector} from "react-redux";
import {CounterStateType, incCountAC, resetCountAC} from "../../../reducers/counterReducer";
import {RootReducersType} from "../../../store/store";
import {SetterStateType} from "../../../reducers/setterReducer";

export function CounterRemote () {

    const dispatch = useDispatch()
    const CounterStepValue = useSelector<RootReducersType, SetterStateType>(state => state.setterReducer).counterStep
    const counterState = useSelector<RootReducersType, CounterStateType>(state => state.counterReducer)


    const ResetHandler = () => {
        dispatch(resetCountAC())
    }
    const IncHandler = () => {
        dispatch(incCountAC(CounterStepValue))
    }
    const SetValuesHandler = () => {
        dispatch({type: 'SET-APP-MODE', updateAppMode: 'setter'})
    }

    const resetToDisabled = counterState.currentValue !== counterState.maxValue
    const incrementToDisabled = counterState.currentValue === counterState.maxValue

    return (
        <div className={s.CounterRemoteStile}>
                <SupperButton buttonName={'RESET'} onClick={ResetHandler} disabled={resetToDisabled}/>
                <SupperButton buttonName={'INC'} onClick={IncHandler} disabled={incrementToDisabled}/>
                <SupperButton buttonName={'SET'} onClick={SetValuesHandler} disabled={false}/>
        </div>
    );
}


