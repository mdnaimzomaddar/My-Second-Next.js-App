'use client'
import React, { useState } from 'react';

const CounterPage = () => {
    const [count, setCount] = useState(0)

    const hendaleIncrease = () =>{
        setCount(count + 1)
    }
    return (
        <div>
            <h2 className='text-shadow-blue-700 font-bold'>Cointer:{count} </h2>
            <button
            onClick={hendaleIncrease}
            className="btn btn-info">Increase</button>
        </div>
    );
};

export default CounterPage;