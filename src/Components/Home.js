import React from "react-dom";
import image from "../Components/chris.png";
import "../styles.css";

const Homepage = () => {
  return (
    <div className="chris">
      <h1 className="There">
        Hi There!
        <br /> My Name is Christian Ofoka{" "}
      </h1>
      <span>
        <h3> I'm suck at maths but one equation I never get wrong 👉</h3>
        <img src={image} alt="chris" />
      </span>
    </div>
  );
};

export default Homepage;
