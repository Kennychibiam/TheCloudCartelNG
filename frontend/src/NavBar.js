import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div></div>
      <div></div>
      <div className="account">
        <Link to={"/"}>LOG IN</Link>
        <Link>SIGN UP</Link>
      </div>
    </div>
  );
};

export default NavBar;
