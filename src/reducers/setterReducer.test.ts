import {
    changeFinalValAC, changeInitValAC, changeStepAC, currentAppModeActionType,
    setterReducer, SetterStateType
} from "./setterReducer";


test('initial value should be changed', () => {
    const initialState: SetterStateType = {
        initCounterVal: 0,
        finalCounterVal: 5,
        counterStep: 1,
        currentAppMode: 'setter'
    }
    const action = changeInitValAC(initialState.initCounterVal + 1)
    const finalState = setterReducer(initialState, action)

    expect(finalState.initCounterVal).toEqual(1)
})

test('final value should be changed', () => {
    const initialState: SetterStateType = {
        initCounterVal: 0,
        finalCounterVal: 3,
        counterStep: 1,
        currentAppMode: 'setter'
    }
    const action = changeFinalValAC(initialState.finalCounterVal - 1)
    const finalState = setterReducer(initialState, action)
    expect(finalState.finalCounterVal).toEqual(2)
})

test('app mode have to be switched', () => {
    const initialState: SetterStateType = {
        initCounterVal: 0,
        finalCounterVal: 3,
        counterStep: 1,
        currentAppMode: 'setter'
    }
    const action: currentAppModeActionType = {type: 'SET-APP-MODE', updateAppMode: 'counter'}
    const finalState = setterReducer(initialState, action)
    expect(finalState.currentAppMode).toEqual('counter')
})

test('setter state have to be zeroed', () => {
    const initialState: SetterStateType = {
        initCounterVal: 0,
        finalCounterVal: 0,
        counterStep: 1,
        currentAppMode: 'setter'
    }
    const finalState = setterReducer(initialState, {type: 'ZERO-SETTER'})
    expect(finalState).toEqual(initialState)
})

test('Counter step should be changed', () => {
    const initialState: SetterStateType = {
        initCounterVal: 0,
        finalCounterVal: 0,
        counterStep: 1,
        currentAppMode: 'setter'
    }
    const action = changeStepAC(4)
    const finalState = setterReducer(initialState, action)

    expect(finalState.counterStep).toBe(4)
})



