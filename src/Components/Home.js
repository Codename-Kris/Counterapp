import React from "react-dom";
import image from "../Components/chris.png";
import Typed from "react-typed";
import { Helmet } from "react-helmet";
import "../styles.css";

const Homepage = () => {
  return (
    <div className="chris">
      <Helmet>
        <meta charSet="utf-8" />
        <title>2nd Semester Exam</title>
        <link rel="canonical" href="https://lbisjr.csb.app/" />
      </Helmet>
      <h1 className="There">
        Hi There!
        <br />
        <Typed
          strings={["Welcome to my Website", "My name is Christian Ofoka"]}
          typeSpeed={70}
        />{" "}
      </h1>
      <span>
        <h3> I'm suck at maths but one equation I never get wrong 👉</h3>
        <img src={image} alt="chris" />
      </span>

      <div>
        <a href="https://github.com/Codename-Kris" target="_blank">
          <button className="button1"> About Me </button>
        </a>
      </div>
    </div>
  );
};

export default Homepage;
