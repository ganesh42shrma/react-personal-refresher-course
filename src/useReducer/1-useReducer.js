import React,{ useReducer} from 'react';
import '../style.css'

const ACTIONS = {
    INCREMENT : 'increment',
    DECREMENT : 'decrement',
}

function reducer(state, action){
    switch(action.type){
        case ACTIONS.INCREMENT:
            return { count: state.count + 1}
        case ACTIONS.DECREMENT:
            return { count: state.count - 1}
        default:
            return state
    }
}

export default function UseReducerExample(){
    const [state,dispatch] = useReducer(reducer, { count: 0 })
      
    function decrementCount(){
        dispatch({ type: ACTIONS.DECREMENT});
    }

    function incrementCount(){
        dispatch({ type: ACTIONS.INCREMENT});
    }

    return (
        <>
            <button onClick={decrementCount}>-</button>
            <span>{state.count}</span>
            <button onClick={incrementCount}>+</button>
        </>
    )
}