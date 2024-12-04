import React from "react";
import "../src/styles/ToDoWidgetTask.css";
import CalenderLogo from "../src/svg-images/calender.svg";
import MoreVertLogo from "../src/svg-images/more-vert.svg";

const ToDoWidgetTask = (props) => {
  return (
    <div className="todo-widget-task-container">
      <div className="left-container">
        <input type="checkbox" />
        <p className="task"> {props.toDoTask} </p>
      </div>

      <div className="right-container">
        <div className="date-container">
          <img src={CalenderLogo} alt="Calender Logo" />
          <p className="date"> {props.toDoDate}</p>
        </div>

        <div className="more-vert-container">
          <img src={MoreVertLogo} alt="More Vert Logo" />
        </div>
      </div>
    </div>
  );
};

export default ToDoWidgetTask;
