import React from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Bikes from "./Bikes";
import BikeCard from "./BikeCard";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <aside className="vertical-nav">
        <Navbar />
      </aside>
      <div className="main-content">
        <header className="top-nav">
          <SearchBar />
        </header>
        <section className="dashboard">
          <Bikes />
        </section>
      </div>
    </div>
  );
};

export default App;
