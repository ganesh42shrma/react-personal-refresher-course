import React,{useContext} from 'react'
import './useContextcss.css'
import ComponentD from './ComponentD'
import { UserContext } from './ComponentA';

function ComponentC() {
    const user = useContext(UserContext)
  return (
    <div className='box'>
    <h1>Component C</h1>
    <h2>{ `Have a productive day ${user}` }</h2>
    <ComponentD/>
    </div>
  )
}

export default ComponentC