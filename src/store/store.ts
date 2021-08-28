import {combineReducers, createStore } from "redux";
import {counterReducer} from "../reducers/counterReducer";
import {setterReducer} from "../reducers/setterReducer";

export type RootReducersType = ReturnType<typeof RootReducers>

export const RootReducers = combineReducers({
    counterReducer,
    setterReducer
})


export const store = createStore(RootReducers)


// @ts-ignore
window.store = store

