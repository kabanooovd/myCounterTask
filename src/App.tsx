import React from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {Setter} from "./components/Setter/Setter";
import {useSelector} from "react-redux";
import {RootReducersType} from "./store/store";
import {SetterStateType} from "./reducers/setterReducer";

// background-color: #08081c;
// color: #0af54c;

function App() {

    const currentAppMode = useSelector<RootReducersType, SetterStateType>(state => state.setterReducer).currentAppMode

    return (
        <div className="App">
            {currentAppMode === 'setter' && <div><Setter /></div>}
            {currentAppMode === 'counter' && <div><Counter /></div>}
        </div>
    );
}

export default App;
