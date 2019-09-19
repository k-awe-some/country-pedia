import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./country-badge.styles.scss";

import ThemeContext from "../../contexts/theme.context";

const CountryBadge = ({ country }) => {
  const [countryName, setCountryName] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://restcountries.eu/rest/v2/alpha/${country}`
      );
      const data = await res.json();
      setCountryName(data.name);
    };

    fetchData();
  }, [country]);

  const { theme } = useContext(ThemeContext);

  return (
    <Link
      to={`/${countryName}`}
      className={`country-badge country-badge-${theme}`}
    >
      {countryName}
    </Link>
  );
};

export default CountryBadge;
