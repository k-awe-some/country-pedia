import React, { useState, useEffect } from "react";

import CountriesList from "../../components/countries-list/countries-list.component";

const Home = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchCountries = async () => {
      const res = await fetch("https://restcountries.eu/rest/v2/all");
      const data = await res.json();
      setCountries(data);
    };

    fetchCountries();
  }, []);

  return (
    <React.Fragment>
      <CountriesList countries={countries} />
    </React.Fragment>
  );
};

export default Home;
