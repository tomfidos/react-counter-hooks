import React, {Component} from 'react';
import './Counter.css';
import './Display';
import Display from './Display';
import ButtonsPanel from './ButtonPanel';
import Clock from './Clock';
import Step from './Step';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counterValue: this.props.initValue,
            showClock: true,
            stepValue: 1,
        }
    }

    changeValue = (action) => {
        this.setState((prevState, prevProps) => {
            let currentCounterValue = prevState.counterValue;

            if (action === 'add') {
                currentCounterValue += prevState.stepValue;
            } else if (action === 'reinit') {
                currentCounterValue = prevProps.initValue;
            } else {
                currentCounterValue = 0
            }

            return({
                counterValue: currentCounterValue,
            })
        });
    }

    updateStep = (action) => {
        this.setState(() => {
                return ({
                    stepValue: parseInt(action.target.value),
                });
            });
    }

    toggleClock = () => {
        this.setState((prevState) => {
            return ({
                showClock: !prevState.showClock
            });

        });
    }

    render() {
        let clockElement = '';
 
        if (this.state.showClock) {
            clockElement = <Clock toggleClockMethod={this.toggleClock}/>;
        } else {
            clockElement = <span onClick={this.toggleClock} className="show-clock">show clock</span>;
        }

        return(
            <div className='counter'>
                Licznik:
                <Display displayValue={this.state.counterValue}/>
                <ButtonsPanel stepValue={this.state.stepValue} buttonMethod={this.changeValue}/>
                <Step stepValue={this.state.stepValue} updateStep={this.updateStep}/>
                {clockElement}
            </div>
        )
    }
}
export default Counter;
