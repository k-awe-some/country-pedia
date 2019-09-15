import React from "react";
import "./countries-list.styles.scss";

import CountryCard from "../country-card/country-card.component";

const CountriesList = ({ countries }) => {
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
            nativeName={country.nativeName}
          />
        </li>
      ))}
    </ul>
  );
};

export default CountriesList;
