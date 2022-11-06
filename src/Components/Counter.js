import React from "react";

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <input type="number" disabled value={state.count} className="input" />

      <br />
      <br />
      <button
        className="btn incrementBtn"
        onClick={() => dispatch({ type: "increment" })}
      >
        Increment
      </button>
      <button
        className="btn decrementBtn"
        onClick={() => dispatch({ type: "decrement" })}
      >
        Decrement
      </button>
      <br />
      <button
        className="btn resetBtn"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
