import React from 'react';
import './Step.css';

function Step(props) {
    return (
        <div className="step">
            <label htmlFor="input-number">Krok:</label>
            <input type="number" id="input-number" className="input-number" value={props.stepValue} onChange={(action) => {props.updateStep(action);}}/>
        </div>
    );
}

export default Step;
