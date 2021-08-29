import {combineReducers, createStore } from "redux";
import {counterReducer} from "../reducers/counterReducer";
import {setterReducer} from "../reducers/setterReducer";
import {loadState, saveState} from "./localStorageData";

export type RootReducersType = ReturnType<typeof RootReducers>

export const RootReducers = combineReducers({
    counterReducer,
    setterReducer
})

export const store = createStore(RootReducers, loadState())

store.subscribe( () => {
    saveState({
        setterReducer: store.getState().setterReducer,
        counterReducer: store.getState().counterReducer
    })
    //localStorage.setItem('state', JSON.stringify( store.getState() ))           // store.getState, returns state of all application

} )

// @ts-ignore
window.store = store

