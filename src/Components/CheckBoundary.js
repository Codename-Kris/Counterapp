import React from "react-dom";
import ErrorBoundary from "./ErrorBoundary";

const DisplaySomething = () => {
  throw new Error("error");
  return (
    <div>
      <h1> </h1>
      <h1>
        {" "}
        This is a component that will contain & display whatever content or
        component we wish to render on the Ui..{" "}
      </h1>
    </div>
  );
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
