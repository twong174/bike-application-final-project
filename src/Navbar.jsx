import React, { useState, useEffect } from "react";
import "../src/styles/Navbar.css";
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
            <div className="inner-nav-container">
              <div className="left-container">
                <img
                  className="hover"
                  src={DashboardLogo}
                  alt="Dashboard Logo"
                />
                <p> Dashboard </p>
              </div>
              <div className="right-container">
                <img
                  className="down-arrow-logo"
                  src={DownArrowLogo}
                  alt="Down Arrow Logo"
                />
              </div>
            </div>
          </li>
          <li onClick={() => setDefaultHomeScreen("Bikes")}>
            <div className="inner-nav-container">
              <div className="left-container">
                <img className="hover" src={BikeLogo} alt="Bike Logo" />
                <p> Bikes</p>
              </div>
              <div className="right-container">
                <img
                  className="down-arrow-logo"
                  src={DownArrowLogo}
                  alt="Down Arrow Logo"
                />
              </div>
            </div>
          </li>
          <li onClick={() => setDefaultHomeScreen("Maintenance")}>
            <div className="inner-nav-container">
              <div className="left-container">
                <img
                  className="hover"
                  src={MaintenanceLogo}
                  alt="Maintenance Logo"
                />
                <p> Maintenance</p>
              </div>
              <div className="right-container">
                <img
                  className="down-arrow-logo"
                  src={DownArrowLogo}
                  alt="Down Arrow Logo"
                />
              </div>
            </div>
          </li>
          <li>
            <div className="inner-nav-container">
              <div className="left-container">
                <img
                  className="hover"
                  src={StatisticsLogo}
                  alt="Statistics Logo"
                />
                <p>Statistics </p>
              </div>
              <div className="right-container">
                <img
                  className="down-arrow-logo"
                  src={DownArrowLogo}
                  alt="Down Arrow Logo"
                />
              </div>
            </div>
          </li>
          <li>
            <div className="inner-nav-container">
              <div className="left-container">
                <img className="hover" src={CalenderLogo} alt="Calendar Logo" />
                <p> Calendar</p>
              </div>

              <div className="right-container">
                <img
                  className="down-arrow-logo"
                  src={DownArrowLogo}
                  alt="Down Arrow Logo"
                />
              </div>
            </div>
          </li>
        </div>
      </ul>

      <div className="search-bar-container"></div>
    </>
  );
};

export default Navbar;
