import React, {useState} from 'react';
import './Counter.css';
import './Display';
import Display from './Display';
import ButtonsPanel from './ButtonPanel';
import Clock from './Clock';
import Step from './Step';

const Counter = (props) => {

    const initValue = props.initValue;

    const [counterValue, setCounterValue] = useState(initValue);
    const [showClock, setShowClock] = useState(true);
    const [stepValue, setStepValue] = useState(1);

    const changeValue = (action) => {
        let currentCounterValue = counterValue;

        if (action === 'add') {
            currentCounterValue += stepValue;
        } else if (action === 'reinit') {
            currentCounterValue = initValue;
        } else {
            currentCounterValue = 0
        }

        setCounterValue(currentCounterValue);
    }

    const updateStep = (action) => {
        setStepValue(parseInt(action.target.value));
    }

    const toggleClock = () => {
        setShowClock(!showClock);
    }

    let clockElement = '';

    if (showClock) {
        clockElement = <Clock toggleClockMethod={toggleClock}/>;
    } else {
        clockElement = <span onClick={toggleClock} className="show-clock">show clock</span>;
    }

    return(
        <div className='counter'>
            Licznik:
            <Display displayValue={counterValue}/>
            <ButtonsPanel stepValue={stepValue} buttonMethod={changeValue}/>
            <Step stepValue={stepValue} updateStep={updateStep}/>
            {clockElement}
        </div>
    )
}

export default Counter;
