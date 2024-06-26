import React , { useState,useEffect } from 'react';
import './style.css'

export default function ExampleUseEffect2(){
    const [windowWidth,setWindowWidth]=useState(window.innerWidth);

    const handleResize = ()=>{
        setWindowWidth(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener('resize',handleResize)
        return ()=>{
            window.removeEventListener('resize',handleResize)
        }
    },[])

    return (
    <>
    <div>{windowWidth}</div>
    </>
    )
}