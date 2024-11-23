import React from "react";
import DashboardInfoCard from "./DashboardInfoCard";
import CalenderWidget from "./CalenderWidget";
import ToDoWidget from "./ToDoWidget";
import ButtonBar from "./ButtonBar";
import DownloadLogo from "../src/svg-images/download.svg";
import CalenderLogo from "../src/svg-images/calender.svg";

import "../src/styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="top-bar-container">
        <p className="dashboard-container-title"> Dashboard </p>
        <p className="dashboard-container-description">Tactical overview</p>
      </div>

      <ButtonBar
        title="Overview"
        leftLogo={CalenderLogo}
        rightLogo={DownloadLogo}
        leftButton="Monthly"
        rightButton="Download"
      />
      <div className="widget-container">
        <div className="left-widget-container">
          <div className="info-card-grid-container">
            <DashboardInfoCard
              statTitle="TOTAL MILES RIDDEN"
              statNumber="1000"
              lastMonthStatNumber="10"
            />
            <DashboardInfoCard />
            <DashboardInfoCard />
            <DashboardInfoCard />
          </div>
          <CalenderWidget />
        </div>
        <div className="right-widget-container">
          <ToDoWidget />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
