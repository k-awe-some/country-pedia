import React from "react";
import { FaMoon } from "react-icons/fa";
import "./nav-bar.styles.scss";

const NavBar = () => (
  <div className="nav-bar">
    <div className="nav-bar__logo">WHERE IN THE WORLD?</div>
    <div className="nav-bar__links">
      <div className="nav-bar__links-item">About this app</div>
      <FaMoon size={25}></FaMoon>
    </div>
  </div>
);

export default NavBar;
