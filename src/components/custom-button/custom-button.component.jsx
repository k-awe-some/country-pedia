import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ onClick, children }) => (
  <button className="custom-button" onClick={onClick}>
    {children}
  </button>
);

export default CustomButton;
