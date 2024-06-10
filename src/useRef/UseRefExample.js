import React, { useState,useEffect,useRef } from 'react'

export default function UseRefExample() {
const [name,setName] = useState('');
const inputRef = useRef();
function focus() {
   inputRef.current.focus()
}
  return (
    <>
        <input ref={inputRef} value={name} onChange={ e => setName(e.target.value)}/>
        <div>My Name is {name}</div>
        <button onClick={focus}>Focus</button>
    </>
  )
}

