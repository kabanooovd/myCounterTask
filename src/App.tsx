import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter";
import {Setter} from "./Components/Setter";

function App() {

    const [initialVal, setInitialVal] = useState<number>(0)
    const [maxVal, setMaxVal] = useState(0)
    const [incVal, setIncVal] = useState(initialVal)
    const [toBeSet, setToBeSet] = useState<boolean>(false)


    const maxValCallBack = (value: number) => {
        setMaxVal(value)
    }

    const minValCallBack = (value: number) => {
        setInitialVal(value)
        setIncVal(value)
    }

    return (
        <div className={'App'}>
            <Counter incVal={incVal}
                     initialVal={initialVal}
                     setIncVal={setIncVal}
                     maxVal={maxVal}
                     toBeSet={toBeSet}
                     setToBeSet={setToBeSet}
            />
            <Setter maxVal={maxVal}
                    initialVal={initialVal}
                    incVal={incVal}
                    maxValCallBack={maxValCallBack}
                    minValCallBack={minValCallBack}
                    setToBeSet={setToBeSet}
            />
        </div>
    );
}

export default App;
