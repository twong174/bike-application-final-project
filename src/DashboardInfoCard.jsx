import React from "react";
import IncreaseButton from "./IncreaseButton";
import "../src/styles/DashboardInfoCard.css";
import ArrowRightAltLogo from "../src/svg-images/arrow_right_alt.svg";
import MoreHorizLogo from "../src/svg-images/more-horiz.svg";

const DashboardInfoCard = (props) => {
  return (
    <div className="dashboard-info-card-container">
      <div className="info-title-container">
        <p className="stat-title"> {props.statTitle}</p>
        <img src={MoreHorizLogo} />
      </div>

      <div className="stat-container">
        <p className="stat-number"> {props.statNumber}</p>
        <IncreaseButton />
      </div>
      <div className="additional-info-container">
        <p className="stat-from-last-month">
          <span className="last-month-stat-number"> +{props.lastMonthStatNumber} </span> from last month
        </p>
        <img src={ArrowRightAltLogo} alt="Arrow Right Alt Logo" />
      </div>
    </div>
  );
};

export default DashboardInfoCard;
