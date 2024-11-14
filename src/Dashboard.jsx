import React from "react";
import DashboardInfoCard from "./DashboardInfoCard";
import DashboardActionBar from "./DashboardActionBar";
import CalenderWidget from "./CalenderWidget";
import ToDoWidget from "./ToDoWidget";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="top-bar-container">
        <p className="dashboard-container-title"> Dashboard </p>
        <p className="dashboard-container-description">Tactical overview</p>
      </div>

      <DashboardActionBar />

      <div className="widget-container">
        <div className="left-widget-container">
          <div className="info-card-grid-container">
            <DashboardInfoCard />
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
