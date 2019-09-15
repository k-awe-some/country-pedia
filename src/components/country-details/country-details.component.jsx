import React from "react";
import "./country-details.styles.scss";

const CountryDetails = ({ countryDetails }) => {
  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages
  } = countryDetails;

  return (
    <div className="country">
      <img className="country__flag" src={`${flag}`} />

      <div className="country__details">
        <div className="country__details--bold-text">{name}</div>

        <div className="country__details--flex">
          <div className="country__details--flex-row">
            <span>
              <strong>Native Name: </strong>
            </span>
            {nativeName}
            <br />
            <span>
              <strong>Population: </strong>
            </span>
            {population}
            <br />
            <span>
              <strong>Region: </strong>
            </span>
            {region}
            <br />
            <span>
              <strong>Subregion: </strong>
            </span>
            {subregion}
            <br />
            <span>
              <strong>Capital: </strong>
            </span>
            {capital}
          </div>

          <div className="country__details--flex-row">
            <span>
              <strong>Top-level Domain: </strong>
            </span>
            {topLevelDomain.map(domain => (
              <span>{domain}</span>
            ))}
            <br />
            <span>
              <strong>Currencies: </strong>
            </span>
            {currencies.map(currency => (
              <span>
                {currency.name} ({currency.symbol})
              </span>
            ))}
            <br />
            <span>
              <strong>Languages: </strong>
            </span>{" "}
            {languages.map(language => (
              <span>{language.name} </span>
            ))}
          </div>
        </div>

        <div className="country__details--flex">
          <span>Border countries</span>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
