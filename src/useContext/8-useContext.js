import "../style.css"
import FunctionContextComponent from "./FunctionContextComponent"
import React from 'react';
import { ThemeProvider } from "./Themecontext";

export default  function ExampleUseContext() {
    
  return (
    <>
      <ThemeProvider>
      <FunctionContextComponent/>
      </ThemeProvider>
    </>
  );
}

