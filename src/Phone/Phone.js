import './Phone.css'
import React, { useState } from 'react';

const Phone = () => {
    let [battery, setBattery] = useState(100);
    const batteryStatus = () =>{
        if(battery === 0){
            return;
        }
        return (setBattery(battery - 10))
    };
    const chargeBattery = () =>{
        return (setBattery(battery = 100))
    }
    return (
        <div>
            <h1>My Phone</h1>
            <div className='phoneContainer'>
                <div className='display'>
                    <p>Battery Status: {battery}</p>
                </div>
                <div className='buttonContainer'>
                    <button className='btn' onClick={batteryStatus}>Battery Down</button>
                    <button className='btn' onClick={batteryStatus}>Battery Down</button>
                    <button className='btn' onClick={batteryStatus}>Battery Down</button>
                    <button className='btn' onClick={batteryStatus}>Battery Down</button>
                    <button className='btn' onClick={batteryStatus}>Battery Down</button>
                    <button className='btn' onClick={batteryStatus}>Battery Down</button>
                    <button className='btn' onClick={batteryStatus}>Battery Down</button>
                    <button className='btn' onClick={batteryStatus}>Battery Down</button>
                    <button className='btn' onClick={chargeBattery}>Charge Battery</button>
                </div>
            </div>
        </div>
    );
};

export default Phone;