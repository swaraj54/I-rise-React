import React from 'react'
import useCounter from './useCounter';

const CustomHook = () => {
    const [count, increment, decrement] = useCounter();
    return (
        <div>
            <h1>Custom Hook</h1>
            <h1>Count : {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default CustomHook