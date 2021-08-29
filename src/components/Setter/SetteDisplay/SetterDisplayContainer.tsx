import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeFinalValAC, changeInitValAC, changeStepAC, SetterStateType} from "../../../reducers/setterReducer";
import {RootReducersType} from "../../../store/store";
import {SetterDisplay} from "./SetterDisplay";

export function SetterDisplayContainer () {

    const dispatch = useDispatch()

    const SetterState = useSelector<RootReducersType, SetterStateType>(state => state.setterReducer)

    const changeFinalCounterValHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const setterFinalVal = +e.currentTarget.value
        setterFinalVal > SetterState.initCounterVal && dispatch(changeFinalValAC(setterFinalVal))
    }
    const changeInitCounterValHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const setterInitVal = +e.currentTarget.value
        setterInitVal >= 0 && setterInitVal < SetterState.finalCounterVal && dispatch(changeInitValAC(setterInitVal))
    }
    const changeCounterStepHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const stepValue = +e.currentTarget.value
        stepValue >= 0 && dispatch(changeStepAC(stepValue))
    }

    const stepToDisabled = SetterState.finalCounterVal > 0
    const maxInitInputsToDisabled = SetterState.counterStep === 0

    return <SetterDisplay   stepValue={SetterState.counterStep}
                            stepOnChangeVal={changeCounterStepHandler}
                            maxInputValue={SetterState.finalCounterVal}
                            maxInputOnChange={changeFinalCounterValHandler}
                            maxInputStep={SetterState.counterStep}
                            initInputValue={SetterState.initCounterVal}
                            initInputOnChange={changeInitCounterValHandler}
                            initInputStep={SetterState.counterStep}
                            initInputDisabled={maxInitInputsToDisabled}
                            maxInputDisabled={maxInitInputsToDisabled}
                            stepInputDisabled={stepToDisabled}
    />
}


