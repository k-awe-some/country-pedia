import React from "react";
import "./countries-list.styles.scss";

import { formatNumber } from "../../utils/helpers";
import CountryCard from "../country-card/country-card.component";

const CountriesList = ({ countries }) => {
  return (
    <ul className="countries-list">
      {countries.map(country => (
        <li className="countries-list__item" key={country.numericCode}>
          <CountryCard
            flag={country.flag}
            name={country.name}
            region={country.region}
            population={formatNumber(country.population)}
            capital={country.capital}
            nativeName={country.nativeName}
          />
        </li>
      ))}
    </ul>
  );
};

export default CountriesList;
