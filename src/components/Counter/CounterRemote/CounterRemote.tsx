import React from 'react';
import s from './CounterRemote.module.css'
import {SupperButton} from "../../SupperButton/SupperButton";
import {useDispatch} from "react-redux";
//import {RootReducersType} from "../../../store/store";
import {incCountAC, resetCountAC} from "../../../reducers/counterReducer";

// background-color: #08081c;
// color: #0af54c;

export function CounterRemote () {

    const dispatch = useDispatch()
    //const CounterValue = useSelector<RootReducersType, CounterStateType>(state => state.counterReducer)

    const ResetHandler = () => {
        dispatch(resetCountAC())
    }
    const IncHandler = () => {
        dispatch(incCountAC(1))
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


