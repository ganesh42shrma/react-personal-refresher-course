import React from "react"

function JSX() {

// return (
//     <div className="dummyClass">    // JSX code
//     <h1>Hello brian</h1> 
//     </div>
// )

  return React.createElement(           // Equivalent react code
    'div',
    { id:'hello',className:'dummyClass'},
    React.createElement('h1',null,'Hello brian')
  )
}

export default JSX