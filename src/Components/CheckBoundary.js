import React from "react-dom";
import ErrorBoundary from "./ErrorBoundary";

const DisplaySomething = () => {
  throw new Error("error");
};

const CheckBoundary = () => {
  return (
    <div>
      <ErrorBoundary>
        {" "}
        <DisplaySomething />{" "}
      </ErrorBoundary>
    </div>
  );
};

export default CheckBoundary;
