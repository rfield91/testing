import React, { useEffect, useState } from 'react';
import './Calculator.less';

const Calculator = (props) => {
    const [paxValues] = useState(props.paxValues);
    const [time, setTime] = useState('');
    const [selectedClass, setSelectedClass] = useState('');

    var options = [];

    var paxTime = (time * selectedClass).toFixed(3);

    for (const category in paxValues) {
        var paxClasses = paxValues[category];

        var optionItems = [];

        for (const i in paxClasses) {
            var paxClass = paxClasses[i];

            optionItems.push(
                <option key={paxClass.Name} value={paxClass.Pax}>
                    {paxClass.Name}
                </option>
            );
        }

        options.push(
            <optgroup label={category} key={category}>
                {optionItems}
            </optgroup>
        );
    }

    useEffect(() => {
        console.log('update');
    }, [time, selectedClass]);

    return (
        <div className='calculator'>
            <div className='inputs'>
                <div>
                    <input
                        type='number'
                        step='.001'
                        placeholder='Your time'
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                </div>
                <div>
                    <select
                        className='ui selection dropdown'
                        value={selectedClass}
                        onChange={(e) => setSelectedClass(e.target.value)}
                    >
                        {options}
                    </select>
                </div>
            </div>
            <div className='pax-time'>
                <h3>PAX Time</h3>
                <div>{paxTime}</div>
            </div>
        </div>
    );
};

export default Calculator;
