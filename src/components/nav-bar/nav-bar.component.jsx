import React from "react";
import { Link } from "react-router-dom";
import { FaMoon } from "react-icons/fa";
import "./nav-bar.styles.scss";

import CustomButton from "../custom-button/custom-button.component";

const NavBar = () => (
  <div className="nav-bar">
    <Link to="/" className="nav-bar__logo">
      WHERE IN THE WORLD?
    </Link>
    <div className="nav-bar__links">
      <FaMoon size={25}></FaMoon>
      <CustomButton
        onClick={() =>
          window.open("https://github.com/k-awe-some/where-in-the-world")
        }
      >
        GitHub{" "}
      </CustomButton>
    </div>
  </div>
);

export default NavBar;
