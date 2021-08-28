


export type CounterStateType = {
    initialValue: number
    maxValue: number
    currentValue: number
}

const initialCounterState = {
    initialValue: 0,
    maxValue: 5,
    currentValue: 0
}

export type MainCounterActionType = incCountACType | resetCountACType | changeCounterRangeACType

export const counterReducer = (state: CounterStateType = initialCounterState, action: MainCounterActionType): CounterStateType => {

    switch (action.type) {
        case 'INCREASE-COUNT': {
            if (state.currentValue < state.maxValue) {
                return {...state, currentValue: state.currentValue + action.countVal}
            } else {
                return state
            }
        }
        case "RESET-COUNTER": {
            return {...state, currentValue: state.initialValue}
        }
        case 'CHANGE-COUNTER-RANGE': {
            return {...state, initialValue: action.initCounterVal, maxValue: action.finalCounterVal}
        }


        default: return state
    }
}

type changeCounterRangeACType = ReturnType<typeof changeCounterRangeAC>
export const changeCounterRangeAC = (initCounterVal: number, finalCounterVal: number) => {
    return {type: 'CHANGE-COUNTER-RANGE', initCounterVal, finalCounterVal} as const
}

type resetCountACType = ReturnType<typeof resetCountAC>
export const resetCountAC = () => {
    return {type: 'RESET-COUNTER', countVal: initialCounterState.initialValue} as const
}

type incCountACType = ReturnType<typeof incCountAC>
export const incCountAC = (countVal: number) => {
    return {type: 'INCREASE-COUNT', countVal} as const
}












