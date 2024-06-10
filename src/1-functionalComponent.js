// WHAT IS REACT COMPONENT ?
// React applications are built using components , which are resuable pieces of UI.

// functional component

import React from 'react';//This line imports the React library.
//It's necessary for writing React components and utilizing JSX.

const reactFunctionalComponent = (props)=> { //declaration of functional component
  console.log(props);

   //The return statement defines what the component will render. 
   //Inside the return statement, you'll find JSX code, which looks like HTML but is actually JavaScript. 
   //JSX allows you to mix HTML-like syntax with JavaScript expressions.
  return (
    <div className="App">
      <h1>This is the Functional Component !</h1>
    </div>
  );
}

export default reactFunctionalComponent;

//This line exports the reactFunctionalComponent so that it can be imported and used in other parts of your application. 
//export default is used to export a single value or functionality from a module.
