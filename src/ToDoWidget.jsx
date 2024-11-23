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

      <ToDoWidgetTask />
      <ToDoWidgetTask />
      <ToDoWidgetTask />
    </div>
  );
};

export default ToDoWidget;
