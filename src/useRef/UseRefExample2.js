//useState() = Re-renders the component when the state value changes
//useRef() = "use Reference" Does not cause re-renders when its value changes
// When you want a component to "remember" some information,
//but you dont want that information to trigger new renders.

// 1.Accessing/Interacting  with DOM elements
// 2. Handling Focus , Animation , and Transitions
// 3. Managing Timers and intervals
import React,{ useState,useRef,useEffect } from 'react';
import "../style.css";

function UseRefExample2() {

    useEffect(()=>{
        console.log("Component Rendered")
    })

    const ref = useRef(0);

    function handleClick(){
        ref.current++;
        console.log(ref.current)
        console.log("component is not rendered");
        console.log(ref);
    }

  return (
    <button onClick={handleClick}>
     Click me !
     </button>
  )
}

export default UseRefExample2