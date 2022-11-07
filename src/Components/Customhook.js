import React from "react-dom";
import { useState } from "react";
import "../styles.css";

const Costhook = () => {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState(0);

  const increment = (event) => {
    event.preventDefault();
    setCounter(counter + 1);
  };

  const decrement = (event) => {
    event.preventDefault();
    setCounter(counter - 1);
  };

  const reset = (event) => {
    event.preventDefault();
    setCounter(counter * 0);
  };

  const setvalue = (event) => {
    event.preventDefault();
    setCounter(input);
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <input className= "input" type="number" value={input} onChange={handleChange} />
      <br />
      <button className="incrementBtn" onClick={increment}>
        {" "}
        Increment 
      </button>

      <button className="decrementBtn" onClick={decrement}>
        {" "}
       Decrement
      </button>
      <br />
      <button className= "setBtn" onClick={setvalue}> setvalue</button>
      <button className="resetBtn" onClick={reset}>
        {" "}
        reset
      </button>
    </div>
  );
};

export default Costhook;
