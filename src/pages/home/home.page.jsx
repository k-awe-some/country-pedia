import React, { useState, useEffect } from "react";
import "./home.styles.scss";

import SearchBar from "../../components/search-bar/search-bar.component";
import CountriesList from "../../components/countries-list/countries-list.component";

const Home = () => {
  const [countriesList, setCountries] = useState({
    countries: [],
    searchQuery: ""
  });
  const { countries, searchQuery } = countriesList;

  useEffect(() => {
    const fetchCountries = async () => {
      const res = await fetch("https://restcountries.eu/rest/v2/all");
      const data = await res.json();
      setCountries({ ...countriesList, countries: data });
    };

    fetchCountries();
  }, [searchQuery]);

  const onSearchChange = event => {
    setCountries({ ...countriesList, searchQuery: event.target.value });
  };

  const filteredCountries = countries.filter(country =>
    country.name.toLocaleLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="homepage">
      <div className="homepage__filter-tools">
        <SearchBar
          placeholder="Search for a country"
          onChange={onSearchChange}
        />
      </div>

      <CountriesList countries={filteredCountries} />
    </div>
  );
};

export default Home;
