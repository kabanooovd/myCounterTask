import {
    changeCounterRangeAC,
    counterReducer,
    CounterStateType,
    incCountAC,
    resetCountAC
} from "./counterReducer";


test('the count should be increased', () => {
    let initState: CounterStateType = {
        initialValue: 0,
        maxValue: 5,
        currentValue: 0,
    }
    let finalState: CounterStateType = counterReducer(initState, incCountAC(1))
    expect(finalState.currentValue).toEqual(initState.currentValue + 1)
})

test('the state should be back to initial condition', () => {
    let initState: CounterStateType = {
        initialValue: 0,
        maxValue: 5,
        currentValue: 4,
    }
    let finalState: CounterStateType = counterReducer(initState, resetCountAC())
    expect(finalState.currentValue).toEqual(finalState.initialValue)
})

test('init & max values should be changed', () => {
    let initState: CounterStateType = {
        initialValue: 0,
        maxValue: 5,
        currentValue: 4,
    }
    const action = changeCounterRangeAC(initState.initialValue + 1, initState.maxValue - 1)
    const finalState: CounterStateType = counterReducer(initState, action)
    expect(finalState.initialValue).toEqual(1)
    expect(finalState.maxValue).toEqual(4)
})


