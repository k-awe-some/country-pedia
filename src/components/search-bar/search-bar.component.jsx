import React, { useContext } from "react";
import "./search-bar.styles.scss";

import ThemeContext from "../../contexts/theme.context";

const SearchBar = ({ ...props }) => {
  const { theme } = useContext(ThemeContext);
  return <input className={`input input-${theme}`} {...props} />;
};

export default SearchBar;
