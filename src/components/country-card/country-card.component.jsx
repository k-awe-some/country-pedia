import React from "react";
import { Link } from "react-router-dom";
import "./country-card.styles.scss";

const CountryCard = ({
  flag,
  name,
  region,
  population,
  capital,
  nativeName
}) => (
  <Link to={`${name.toLowerCase()}`} className="country-card">
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
  </Link>
);

export default CountryCard;
