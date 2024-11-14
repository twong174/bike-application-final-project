import React from "react";
import DashboardInfoCard from "./DashboardInfoCard";
import DashboardActionBar from "./DashboardActionBar";
import CalenderWidget from "./CalenderWidget";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="top-bar-container">
        <p className="dashboard-container-title"> Dashboard </p>
        <p className="dashboard-container-description">Tactical overview</p>
      </div>

      <DashboardActionBar />
      
      <div className="overall-dashboard-info-card-container">
        <DashboardInfoCard />
        <DashboardInfoCard />
        <DashboardInfoCard />
        <DashboardInfoCard />
      </div>

      <CalenderWidget/>
    </div>
  );
};

export default Dashboard;
