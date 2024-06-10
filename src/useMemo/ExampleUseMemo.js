//The useMemo hook in React is used to memoize the result of a calculation between renders.
//This can optimize performance by preventing unnecessary recalculations of expensive operations
// when the dependecies have not changed.


import React,{ useState,useMemo, useEffect } from 'react'

export default function ExampleUseMemo() {
    const [number,setNumber] = useState(0);
    const [dark,setDark] = useState(false);
    const doubleNumber = useMemo(()=>{
      return  slowFunction(number)
    },[number]);
    const themeStyles = useMemo(()=>{
        return {
        backgroundColor: dark ? 'black' : 'white',
        color : dark ? 'white':'black',
    }
},[dark]);

useEffect(()=>{
    console.log("Theme Changed!")
},[themeStyles])

  return (
    <>
        <input type="text" value={number} onChange={e => setNumber(parseInt(e.target.value))}/>
        <button onClick={()=> setDark(prevDark => !prevDark)}>Change Theme</button>
        <div style={themeStyles}>{doubleNumber}</div>
    </>
  )
}

function slowFunction(num){
    console.log('calling slow function');
    for (let i=0;i<= 10000000000;i++){}
    return num*2;
}