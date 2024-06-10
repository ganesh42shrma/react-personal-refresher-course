import React, { Component } from "react";
import Greet from "./5-props1"

class props extends Component {
    render(){
        return (
            <div className="App">
                <Greet name="Bruce"/>
                <Greet name="Alice"/>
                <Greet name="karolin"/>
            </div>
        )
    }
}

export default props;