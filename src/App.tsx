import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter";
import {Setter} from "./Components/Setter";

function App() {

    const [initialVal, setInitialVal] = useState<number>(0)
    const [maxVal, setMaxVal] = useState(0)
    const [incVal, setIncVal] = useState(initialVal)
    const [toBeSet, setToBeSet] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [toDisableInput, setToDisableInput] = useState<boolean>(false)

    const maxValCallBack = (value: number) => {
        if (value < incVal) {
            setError(true)
        } else {
            setMaxVal(value)
            setError(false)
        }
    }

    const minValCallBack = (value: number) => {
        if (value > maxVal || value < 0) {
            setError(true)
        } else {
            setInitialVal(value)
            setIncVal(value)
            setError(false)
        }
    }

    return (
        <div className={'App'}>
            <Counter incVal={incVal}
                     initialVal={initialVal}
                     setIncVal={setIncVal}
                     maxVal={maxVal}
                     toBeSet={toBeSet}
                     setToBeSet={setToBeSet}
                     error={error}
                     toDisableInput={toDisableInput}
                     setToDisableInput={setToDisableInput}
            />
            <Setter maxVal={maxVal}
                    initialVal={initialVal}
                    incVal={incVal}
                    maxValCallBack={maxValCallBack}
                    minValCallBack={minValCallBack}
                    setToBeSet={setToBeSet}
                    error={error}
                    toDisableInput={toDisableInput}
                    setToDisableInput={setToDisableInput}
            />
        </div>
    );
}

export default App;
