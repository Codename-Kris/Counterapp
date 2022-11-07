import React from "react-dom";
import { NavLink } from "react-router-dom";

const MyNav = () => {
  return (
    <div className="nav-box">
      <nav className="nav">
        <NavLink className="nav-kids" to={"/"}>
          {" "}
          HomePage{" "}
        </NavLink>
        <NavLink className="nav-kids" to={"/customhook"}>
          {" "}
          Customhook{" "}
        </NavLink>
        <NavLink className="nav-kids" to={"/reeducer"}>
          {" "}
          Reducer{" "}
        </NavLink>
        <NavLink className="nav-kids" to={"/checkboundary"}>
          {" "}
          ErrorBoundary{" "}
        </NavLink>
      </nav>
    </div>
  );
};

export default MyNav;
