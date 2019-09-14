import React from "react";
import "./filter-region.styles.scss";

const FilterRegion = ({ regions, onChange }) => (
  <select className="filter-region" onChange={onChange}>
    {regions.map((region, index) => (
      <option value={region.toLowerCase()} key={index}>
        {region}
      </option>
    ))}
  </select>
);

export default FilterRegion;
