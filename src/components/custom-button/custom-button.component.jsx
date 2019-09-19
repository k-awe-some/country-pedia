import React, { useContext } from "react";
import "./custom-button.styles.scss";

import ThemeContext from "../../contexts/theme.context";

const CustomButton = ({ onClick, children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      className={`custom-button custom-button-${theme}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
