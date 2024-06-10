// Simple example to implement the useState hook in React
import React from "react";
import { useState } from "react";
import './style.css';

function ExampleUseState(){
    const [count,setCount]  = useState(0);  // useState will return an array of values which is destructured in the state and the setState  method.

    function decrementCount(){
        setCount(prevCount => prevCount - 1); //The functional form of setState takes a function as an argument. This function receives the previous state as its argument and returns the new state. This is particularly useful when your new state depends on the previous state.
    }

    function incrementCount(){
        setCount(prevCount => prevCount + 1);
    }

    return (
        <>
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </>
    )
}

export default ExampleUseState;