import React from "react";
// import logo from "./logo.svg";
import "./App.scss";

import NavBar from "./components/nav-bar/nav-bar.component";
import CountriesList from "./components/countries-list/countries-list.component";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <CountriesList />
    </div>
  );
};

export default App;
