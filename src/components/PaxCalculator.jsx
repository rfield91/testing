import React, { useEffect, useState } from 'react';
import Calculator from './Calculator';
import Output from './Output';
import './PaxCalculator.less';

const PaxCalculator = (props) => {
    const [paxValues] = useState(props.paxValues);
    const [time, setTime] = useState(0);
    const [selectedClass, setSelectedClass] = useState('');

    const updateTime = (updatedTime) => {
        setTime(updatedTime);
    };

    const updateClass = (updatedClass) => {
        setSelectedClass(updatedClass);
    };

    return (
        <div>
            <Calculator
                paxValues={paxValues}
                updateTime={updateTime}
                updateClass={updateClass}
            />
            <Output
                paxValues={paxValues}
                time={time}
                selectedClass={selectedClass}
            />
        </div>
    );
};

export default PaxCalculator;
