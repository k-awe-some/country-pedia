import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./country-badge.styles.scss";

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

  return (
    <Link to={`/${countryName}`} className="country-badge">
      {countryName}
    </Link>
  );
};

export default CountryBadge;
