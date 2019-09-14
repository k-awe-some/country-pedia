import React from "react";

import "./country-card.styles.scss";

const CountryCard = ({ flag, name, region, population, capital }) => (
  <div className="country-card">
    <div
      className="country-card__flag"
      style={{ backgroundImage: `url(${flag})` }}
    />
    <p className="country-card__name">{name}</p>
    <div className="country-card__info">
      <div className="country-card__info--align-right">
        <span>Region:</span>
        <br />
        <span>Population:</span>
        <br />
        <span>Capital:</span>
      </div>
      <div className="country-card__info--align-left">
        <span>{region}</span>
        <br />
        <span>{population}</span>
        <br />
        <span>{capital}</span>
      </div>
    </div>
  </div>
);

export default CountryCard;
