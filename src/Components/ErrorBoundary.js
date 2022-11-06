import React from "react-dom";

import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="error_boundary fontpoppin color_white">
          <p>OOPS !</p>
          <h1 style={{ color: "red" }}>ERROR!! something went wrong!!!</h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
