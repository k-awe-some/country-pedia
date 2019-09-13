import React, { useState, useEffect } from "react";
import "./countries-list.styles.scss";

import CountryCard from "../country-card/country-card.component";

const CountriesList = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchCountries = async () => {
      const res = await fetch("https://restcountries.eu/rest/v2/all");
      const data = await res.json();
      setCountries(data);
    };

    fetchCountries();
  }, []);

  return (
    <ul className="countries-list">
      {countries.map(country => (
        <li key={country.numericCode}>
          <CountryCard
            flag={country.flag}
            name={country.name}
            region={country.region}
            population={country.population}
            capital={country.capital}
          />
        </li>
      ))}
    </ul>
  );
};

export default CountriesList;
