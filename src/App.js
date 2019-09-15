import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.scss";

import NavBar from "./components/nav-bar/nav-bar.component";
import Home from "./pages/home/home.page";
import Country from "./pages/country/country.page";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:countryId" component={Country} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
