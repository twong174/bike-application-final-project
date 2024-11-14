import React from "react";
import "./SearchBar.css";
import SearchLogo from "../src/svg-images/search.svg";
import DarkModeLogo from "../src/svg-images/dark-mode.svg";
import RavenLogo from "../src/svg-images/raven.svg";

const SearchBar = () => {
  return (
    <>
      <div className="top-nav-bar-container">
        <div className="search-bar-container">
          <input className="search-bar" placeholder="Search..." />
          <img src={SearchLogo} alt="Search Logo" className="search-icon" />
        </div>
        <div className="theme-container">
          <img src={DarkModeLogo} alt="Dark Mode Logo" className="theme-logo" />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
