import React from "react";
// import logo from "./logo.svg";
import "./App.scss";

import NavBar from "./components/nav-bar/nav-bar.component";
import Home from "./pages/home/home.page";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
};

export default App;
