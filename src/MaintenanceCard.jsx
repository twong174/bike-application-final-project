import React from "react";
import "../src/styles/MaintenanceCard.css";
import MoreHorizIcon from "../src/svg-images/more-horiz.svg";

const MaintenanceCard = ({
  taskName,
  taskToolsNeeded,
  taskDueDate,
  taskNotes,
}) => {
  return (
    <div className="maintenance-card-container">
      <div className="header-container">
        <input type="checkbox" />
        <img src={MoreHorizIcon} />
      </div>
      <div className="task-info-container">
        <div className="task-header-container">
          <p className="task-title"> {taskName} </p>
          <p className="task-due-date"> Due Date: {taskDueDate}</p>
        </div>
        <p className="task-tools"> Tools: {taskToolsNeeded} </p>
        <p className="task-notes"> {taskNotes} </p>
      </div>
    </div>
  );
};

export default MaintenanceCard;
