import React, { useContext } from "react";
import "./filter-region.styles.scss";

import ThemeContext from "../../contexts/theme.context";

const FilterRegion = ({ regions, onChange }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <select
      className={`filter-region filter-region-${theme}`}
      onChange={onChange}
    >
      {regions.map((region, index) => (
        <option value={region.toLowerCase()} key={index}>
          {region}
        </option>
      ))}
    </select>
  );
};

export default FilterRegion;
