import React from "react";
import "../src/styles/ToDoWidget.css";
import ToDoWidgetTask from "./ToDoWidgetTask";

const ToDoWidget = () => {
  return (
    <div className="todo-widget-container">
      <div className="todo-widget-title-container">
        <p className="todo-widget-title"> TO DO </p>
        <p className="todo-widget-description">Urgent...</p>
      </div>

      <ToDoWidgetTask toDoTask="Clean Chain" toDoDate="03 May 2024" />
      <ToDoWidgetTask toDoTask="Pump Wheels" toDoDate="07 May 2024" />
      <ToDoWidgetTask toDoTask="Adjust Brake Tension" toDoDate="09 May 2024" />
    </div>
  );
};

export default ToDoWidget;
