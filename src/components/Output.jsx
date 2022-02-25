import React, { useState } from 'react';
import './Output.less';

const Output = (props) => {
    const [paxValues] = useState(props.paxValues);
    const [time] = useState(props.time);
    const [selectedClass] = useState(props.selectedClass);

    var categories = [];

    for (var category in paxValues) {
        var paxClasses = paxValues[category];

        var classes = [];

        for (var i in paxClasses) {
            var paxClass = paxClasses[i];

            var timeToBeat = ((time * selectedClass) / paxClass.Pax).toFixed(3);

            classes.push(
                <div className='class-result' key={paxClass.Name}>
                    <div className='class-name'>{paxClass.Name}</div>
                    <div className='time'>{timeToBeat}</div>
                </div>
            );
        }

        categories.push(
            <div className='category' key={category}>
                <h3>{category}</h3>
                <div className='classes'>{classes}</div>
            </div>
        );
    }

    return (
        <div className='output'>
            <div className='categories'>{categories}</div>
        </div>
    );
};

export default Output;
