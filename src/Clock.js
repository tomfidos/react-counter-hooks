import React, {useEffect, useState} from 'react';
import './Clock.css';
 
const Clock = (props) => {

    const [date, setDate] = useState(new Date());
 
    useEffect(() => {
        const interval = setInterval(
            () => {tick()},
            1000
        );
        return () => clearInterval(interval);
    }, []);
 
    const tick = () => {
        setDate(new Date());
    }
 
    return(
        <div className="clock">
            <h4>Time: {date.toLocaleTimeString()} <span onClick={props.toggleClockMethod}>X</span></h4>
        </div>
    );
 
}
 
export default Clock;
