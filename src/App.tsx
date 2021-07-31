import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter";
import {Setter} from "./Components/Setter";

function App() {

    const initialVal = 0
    const maxVal = 5

    const [incVal, setIncVal] = useState(initialVal)

    return (
        <div className={'App'}>
            <Counter incVal={incVal}
                     initialVal={initialVal}
                     setIncVal={setIncVal}
                     maxVal={maxVal}
            />
            <Setter />
        </div>
    );
}

export default App;
