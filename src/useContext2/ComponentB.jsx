import React,{useContext} from 'react';
import './useContextcss.css';
import ComponentC from './ComponentC';
import { UserContext } from './ComponentA';

function ComponentB() {
    const user = useContext(UserContext)
  return (
    <div className='box'>
    <h1>Component B</h1>
    <h2> {`Each day is a new Start ${user}`} </h2>
    <ComponentC/>
    </div>
  )
}

export default ComponentB