import React, { useState } from 'react';
import Calculator from './Calculator';
import Output from './Output';
import './PaxCalculator.less';

const PaxCalculator = (props) => {
    const [paxValues] = useState(props.paxValues);

    const keys = [];

    for (const [key] of Object.entries(paxValues)) {
        keys.push(key);
    }

    return (
        <div>
            <Calculator paxValues={paxValues} />
            <Output paxValues={paxValues} time={0} selectedClass={0.823} />
        </div>
    );
};

export default PaxCalculator;
