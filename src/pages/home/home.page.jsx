import React, { useState, useEffect } from "react";
import "./home.styles.scss";

import SearchBar from "../../components/search-bar/search-bar.component";
import FilterRegion from "../../components/filter-region/filter-region.component";
import CountriesList from "../../components/countries-list/countries-list.component";

const regions = [
  "All regions",
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania"
];

const Home = () => {
  const [countriesList, setCountries] = useState({
    countries: [],
    searchQuery: "",
    region: null
  });
  const { countries, searchQuery, region } = countriesList;

  useEffect(() => {
    const fetchCountries = async () => {
      if ((searchQuery === "") | (region === "all regions")) {
        const res = await fetch("https://restcountries.eu/rest/v2/all");
        const data = await res.json();
        setCountries({ ...countriesList, countries: data });
      }

      if (region !== null && region !== "all regions") {
        const res = await fetch(
          `https://restcountries.eu/rest/v2/region/${region}`
        );
        const data = await res.json();
        setCountries({ ...countriesList, countries: data });
      }
    };

    fetchCountries();
  }, [searchQuery, region]);

  const onSearchChange = event => {
    setCountries({ ...countriesList, searchQuery: event.target.value });
  };

  const filteredCountriesBySearch = countries.filter(country =>
    country.name.toLocaleLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCountriesByRegion = event => {
    setCountries({ ...countriesList, region: event.target.value });
  };

  return (
    <div className="homepage">
      <div className="homepage__filter-tools">
        <SearchBar
          placeholder="Search for a country"
          onChange={onSearchChange}
        />
        <FilterRegion regions={regions} onChange={filteredCountriesByRegion} />
      </div>

      <CountriesList countries={filteredCountriesBySearch} />
    </div>
  );
};

export default Home;
