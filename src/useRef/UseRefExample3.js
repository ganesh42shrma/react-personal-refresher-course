import React, { useRef } from 'react';
import './styles.css'; // Assuming you have this file for your CSS

export default function UseRefExample() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  const handleButtonClick = (inputRef) => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = 'yellow';

    // Reset the background color of other inputs
    if (inputRef !== inputRef1) inputRef1.current.style.backgroundColor = 'white';
    if (inputRef !== inputRef2) inputRef2.current.style.backgroundColor = 'white';
    if (inputRef !== inputRef3) inputRef3.current.style.backgroundColor = 'white';
  };

  return (
    <div className="container">
      <div className="input-container">
        <input ref={inputRef1} type="text" placeholder="Input 1" />
        <button onClick={() => handleButtonClick(inputRef1)}>Click Me 1</button>
      </div>
      <div className="input-container">
        <input ref={inputRef2} type="text" placeholder="Input 2" />
        <button onClick={() => handleButtonClick(inputRef2)}>Click Me 2</button>
      </div>
      <div className="input-container">
        <input ref={inputRef3} type="text" placeholder="Input 3" />
        <button onClick={() => handleButtonClick(inputRef3)}>Click Me 3</button>
      </div>
    </div>
  );
}
