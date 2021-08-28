
export type CurrentAppModeType = 'setter' | 'counter'

export type SetterStateType = {
    initCounterVal: number
    finalCounterVal: number
    currentAppMode: CurrentAppModeType
}

const initialState: SetterStateType = {
    initCounterVal: 0,
    finalCounterVal: 0,
    currentAppMode: 'setter'
}

export type MainSetterActionType =  changeInitValACType         | changeFinalValACType |
                                    currentAppModeActionType    | ZeroSetterActionType

export const setterReducer = (state: SetterStateType = initialState, action: MainSetterActionType): SetterStateType => {
    switch (action.type) {
        case 'CHANGE-INIT-VAL': {
            return {...state, initCounterVal: action.updatedInitVal}
        }
        case 'CHANGE-FINAL-VAL': {
            return {...state, finalCounterVal: action.updatedFinalVal}
        }
        case 'SET-APP-MODE': {
            return {...state, currentAppMode: action.updateAppMode}
        }
        case 'ZERO-SETTER': {
            return {...state, initCounterVal: 0, finalCounterVal: 0}
        }

        default : return state
    }
}

type ZeroSetterActionType = {type: 'ZERO-SETTER'}

export type currentAppModeActionType = {type: 'SET-APP-MODE', updateAppMode: CurrentAppModeType}

export type changeFinalValACType = ReturnType<typeof changeFinalValAC>
export const changeFinalValAC = (updatedFinalVal: number) => {
    return {type: 'CHANGE-FINAL-VAL', updatedFinalVal} as const
}

export type changeInitValACType = ReturnType<typeof changeInitValAC>
export const changeInitValAC = (updatedInitVal: number) => {
        return {type: 'CHANGE-INIT-VAL', updatedInitVal} as const
}


