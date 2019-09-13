import React from "react";

import "./country-card.styles.scss";

const CountryCard = ({ flag, name, region, population, capital }) => (
  <div className="country-card">
    <div
      className="country-card__flag"
      style={{ backgroundImage: `url(${flag})` }}
    />
    <p className="country-card__name">{name}</p>
    <p className="country-card__info">
      <span>Region: </span>
      {region}
      <br />
      <span>Population: </span>
      {population}
      <br />
      <span>Capital: </span>
      {capital}
    </p>
  </div>
);

export default CountryCard;
