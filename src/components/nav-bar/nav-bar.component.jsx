import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoIosSunny, IoIosMoon } from "react-icons/io";
import "./nav-bar.styles.scss";

import ThemeContext from "../../contexts/theme.context";
import CustomButton from "../custom-button/custom-button.component";

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`nav-bar nav-bar-${theme}`}>
      <Link to="/" className="nav-bar__logo">
        WHERE IN THE WORLD?
      </Link>

      <div className="nav-bar__links">
        <button
          className="nav-bar__links--transparent-button"
          onClick={toggleTheme}
        >
          {theme === "light" ? (
            <IoIosMoon size={30} />
          ) : (
            <IoIosSunny size={30} />
          )}
        </button>

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
};

export default NavBar;
