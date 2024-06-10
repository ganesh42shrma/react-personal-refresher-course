import React, { useReducer } from 'react';
import './styles.css';

const initialState = {
  count: 0,
  userInput: '',
  color: 'black',
};

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  SET_USER_INPUT: 'set_user_input',
  TOGGLE_COLOR: 'toggle_color',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { ...state, count: state.count - 1 };
    case ACTIONS.SET_USER_INPUT:
      return { ...state, userInput: action.payload };
    case ACTIONS.TOGGLE_COLOR:
      return { ...state, color: state.color === 'black' ? 'red' : 'black' };
    default:
      return state;
  }
}

export default function UseReducerSimpleExample() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <div>
        <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
        <span style={{ color: state.color }}>{state.count}</span>
        <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
      </div>
      <div>
        <input
          type="text"
          value={state.userInput}
          onChange={(e) =>
            dispatch({ type: ACTIONS.SET_USER_INPUT, payload: e.target.value })
          }
        />
        <span
          style={{ color: state.color }}
        >{`User Input: ${state.userInput}`}</span>
      </div>
      <div>
        <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_COLOR })}>
          Toggle Color
        </button>
      </div>
    </div>
  );
}
