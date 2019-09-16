import React from "react";
import "./country-details.styles.scss";

import CountryBadge from "../country-badge/country-badge.component";

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
    languages,
    borders
  } = countryDetails;

  return (
    <div className="country">
      <img className="country__flag" src={`${flag}`} alt={`${name}'s flag`} />

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
            {topLevelDomain.map((domain, index) => (
              <span key={index}>{domain}</span>
            ))}
            <br />
            <span>
              <strong>Currencies: </strong>
            </span>
            {currencies.map((currency, index) => (
              <span key={index}>
                {currency.name} ({currency.symbol})
              </span>
            ))}
            <br />
            <span>
              <strong>Languages: </strong>
            </span>{" "}
            {languages
              .map((language, index) => (
                <span key={index}>{language.name}</span>
              ))
              .reduce((prev, curr) => {
                return prev === null ? [curr] : [...prev, ", ", curr];
              }, null)}
          </div>
        </div>

        <div className="country__details--flex">
          <span className="country__details--flex-row">
            <strong>Border countries: </strong>
          </span>
          <div className="country__details--flex-row grid">
            {borders.length === 0 ? (
              <span>none</span>
            ) : (
              borders.map((border, index) => (
                <CountryBadge country={border} key={index} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
