import React, { useState, useEffect } from "react";
import "./Navbar.css";
import BikeLogo from "../src/svg-images/bike.svg";
import DashboardLogo from "../src/svg-images/dashboard.svg";
import MaintenanceLogo from "../src/svg-images/maintenance.svg";
import StatisticsLogo from "../src/svg-images/statistics.svg";
import CalenderLogo from "../src/svg-images/calender.svg";
import DownArrowLogo from "../src/svg-images/down-arrow.svg";
import RavenLogo from "../src/svg-images/raven.svg";

const Navbar = ({ setDefaultHomeScreen }) => {
  return (
    <>
      <ul className="main-container">
        <div className="logo-container">
          <img src={RavenLogo} alt="Raven Logo" />
          <span className="brand-name"> BikeBuddy </span>
        </div>
        <div className="nav-container">
          <li onClick={() => setDefaultHomeScreen("Dashboard")}>
            <img className="hover" src={DashboardLogo} alt="Dashboard Logo" />
            Dashboard
            <img
              className="down-arrow-logo"
              src={DownArrowLogo}
              alt="Down Arrow Logo"
            />
          </li>
          <li onClick={() => setDefaultHomeScreen("Bikes")}>
            <img className="hover" src={BikeLogo} alt="Bike Logo" />
            Bikes
            <img
              className="down-arrow-logo"
              src={DownArrowLogo}
              alt="Down Arrow Logo"
            />
          </li>
          <li onClick={() => setDefaultHomeScreen("Maintenance")}>
            <img
              className="hover"
              src={MaintenanceLogo}
              alt="Maintenance Logo"
            />
            Maintenance
            <img
              className="down-arrow-logo"
              src={DownArrowLogo}
              alt="Down Arrow Logo"
            />
          </li>
          <li>
            <img className="hover" src={StatisticsLogo} alt="Statistics Logo" />
            Statistics
            <img
              className="down-arrow-logo"
              src={DownArrowLogo}
              alt="Down Arrow Logo"
            />
          </li>
          <li>
            <img className="hover" src={CalenderLogo} alt="Calendar Logo" />
            Calendar
            <img
              className="down-arrow-logo"
              src={DownArrowLogo}
              alt="Down Arrow Logo"
            />
          </li>
        </div>
      </ul>

      <div className="search-bar-container"></div>
    </>
  );
};

export default Navbar;
