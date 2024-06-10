//PROP DRILLING
// prop drilling is a scenerio where you pass props from a parent component 
//across different nested child components(drilling)
//until you get to the child component that needs those props
import React from 'react';
import { useState} from "react";
import Layout from "./Layout";

export default function Application() {
    const [loading,setLoading] = useState(false);

    const onSubmit = () => {
        setLoading(true);

        setTimeout(()=>{
            setLoading(false)
        },2000)
    }

    return(
        <div className='container'>
            <Layout isLoading={loading} onClickSubmit = {onSubmit}/>
        </div>
    )
}

//prop drilling is bad because it becomes hard to maintain as applications grow.
//It tightly couples components , making refactoring difficult and introducing performance overhead.
//Context API , Redux , or custom hooks offer better alternatives for managing state and data flow across components.