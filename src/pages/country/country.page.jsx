import React, { useState, useEffect } from "react";
import "./country.styles.scss";

import CountryDetails from "../../components/country-details/country-details.component";

const Country = ({ match }) => {
  const [countryDetails, setCountryDetails] = useState({
    flag: "",
    name: "",
    population: "",
    nativeName: "",
    region: "",
    subregion: "",
    capital: "",
    topLevelDomain: [],
    currencies: [],
    languages: []
  });

  useEffect(() => {
    const fetchCountry = async () => {
      const res = await fetch(
        `https://restcountries.eu/rest/v2/name/${match.params.countryId}`
      );
      const data = await res.json();
      const country = data[0];
      setCountryDetails({
        flag: country.flag,
        name: country.name,
        nativeName: country.nativeName,
        population: country.population,
        region: country.region,
        subregion: country.subregion,
        capital: country.capital,
        topLevelDomain: country.topLevelDomain,
        currencies: country.currencies,
        languages: country.languages
      });
    };

    fetchCountry();
  }, []);

  return (
    <div className="country-page">
      <CountryDetails countryDetails={countryDetails} />
    </div>
  );
};

export default Country;
