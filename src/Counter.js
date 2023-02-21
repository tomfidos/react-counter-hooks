import React, {Component} from 'react';
import './Counter.css';
import './Display';
import Display from './Display';
import ButtonsPanel from './ButtonPanel';
import Clock from './Clock';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counterValue: this.props.initValue,
            showClock: true,
        }
    }

    changeValue = (action) => {
        this.setState((prevState, prevProps) => {
            let currentCounterValue = prevState.counterValue;

            if (action === 'add') {
                currentCounterValue += 1;
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
            clockElement = <Clock toggleClockMethod={this.toggleClock} />;
        } else {
            clockElement = <span onClick={this.toggleClock} className="show-clock">show clock</span>;
        }

        return(
            <div className='counter'>
                Licznik:
                <Display displayValue={this.state.counterValue}/>
                <ButtonsPanel buttonMethod={this.changeValue}/>
                {clockElement}
            </div>
        )
    }
}
export default Counter;
