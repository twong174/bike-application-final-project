import React from "react";
import "./SearchBar.css";
import SearchLogo from "../src/svg-images/search.svg";
import DarkModeLogo from "../src/svg-images/dark-mode.svg";
import RavenLogo from "../src/svg-images/raven.svg";

const SearchBar = () => {
  return (
    <>
      <div className="top-nav-bar-container">
        <div className="logo-container">
          <img src={RavenLogo} alt="Raven Logo" />
          <span className="brand-name"> BikeBuddy </span>
        </div>
        <div className="search-bar-container">
          <input className="search-bar" placeholder="Search..." />
          <img src={SearchLogo} alt="Search Logo" className="search-icon" />
        </div>
        <div className="theme-container">
          <div>
            <img src={DarkModeLogo} alt="Search Logo" className="theme-logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
