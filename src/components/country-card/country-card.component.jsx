import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./country-card.styles.scss";

import ThemeContext from "../../contexts/theme.context";

const CountryCard = ({
  flag,
  name,
  region,
  population,
  capital,
  nativeName
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Link
      to={`${name.toLowerCase()}`}
      className={`country-card country-card-${theme}`}
    >
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
};

export default CountryCard;
