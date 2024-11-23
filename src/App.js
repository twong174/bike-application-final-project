import React, { useState } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Bikes from "./Bikes";
import Dashboard from "./Dashboard";
import Maintenance from "./Maintenance";
import "../src/styles/App.css";

const App = () => {
  const [defaultHomeScreen, setDefaultHomeScreen] = useState("Dashboard");

  const renderHomeScreen = () => {
    switch (defaultHomeScreen) {
      case "Dashboard":
        return <Dashboard />;
      case "Bikes":
        return <Bikes />;
      case "Maintenance":
        return <Maintenance />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app-container">
      <aside className="vertical-nav">
        <Navbar setDefaultHomeScreen={setDefaultHomeScreen} />
      </aside>
      <div className="main-content">
        <header className="top-nav">
          <SearchBar />
        </header>
        <section className="dashboard">{renderHomeScreen()}</section>
      </div>
    </div>
  );
};

export default App;
