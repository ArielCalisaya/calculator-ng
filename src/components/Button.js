import React, { useState, useEffect } from 'react';


const Counter = () => {
    const [counter, incrementCounter] = useState(0)

    useEffect(() => {
        if(counter <= 10){
            document.title = counter
        }
    }, [counter])
    const handleIncrement = () => {
        incrementCounter(counter + 1)
    }
    const handleDecrement = () => {
        incrementCounter(counter - 1)
    }

    return(
        <div>
            <h1>{counter}</h1>
            <hr/>
            <button type="button" onClick={handleIncrement}>+</button>
            <button type="button" onClick={handleDecrement}>-</button>

        </div>
    )
}
export default Counter