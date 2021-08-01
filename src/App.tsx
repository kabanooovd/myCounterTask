import React, {useEffect, useState} from 'react';
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
    const [toDisableSetBtn, setToDisableSetBtn] = useState<boolean>(false)

    useEffect( () => {
        let maxValAsString = localStorage.getItem('MAX_VAL')
        if (maxValAsString) setMaxVal(JSON.parse(maxValAsString))
        let minValAsString = localStorage.getItem('MIN_VAL')
        if (minValAsString) setIncVal(JSON.parse(minValAsString))
    }, [] )

    useEffect( () => {
        localStorage.setItem("MAX_VAL", JSON.stringify(maxVal))
        localStorage.setItem("MIN_VAL", JSON.stringify(incVal))
    }, [maxVal, incVal] )

    const maxValCallBack = (value: number) => {
        if (value < incVal) {
            setError(true)
            setToDisableSetBtn(true)
        } else {
            setMaxVal(value)
            setError(false)
            setToDisableSetBtn(false)
        }
    }

    const minValCallBack = (value: number) => {
        if (value > maxVal || value < 0) {
            setError(true)
            setToDisableSetBtn(true)
        } else {
            setInitialVal(value)
            setIncVal(value)
            setError(false)
            setToDisableSetBtn(false)
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
                     setToDisableSetBtn={setToDisableSetBtn}
                     setError={setError}
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
                    toDisableSetBtn={toDisableSetBtn}
                    setToDisableSetBtn={setToDisableSetBtn}
            />
        </div>
    );
}

export default App;
