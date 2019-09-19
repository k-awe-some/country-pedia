import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.scss";

import ThemeContext from "./contexts/theme.context";
import NavBar from "./components/nav-bar/nav-bar.component";
import Home from "./pages/home/home.page";
import Country from "./pages/country/country.page";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme => {
      return theme === "light" ? "dark" : "light";
    });
  };

  const value = useMemo(
    () => ({
      theme,
      toggleTheme
    }),
    [theme]
  );

  return (
    <Router>
      <div className={`App ${theme}`}>
        <ThemeContext.Provider value={value}>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:countryId" component={Country} />
          </Switch>
        </ThemeContext.Provider>
      </div>
    </Router>
  );
};

export default App;
