import React, { useState } from "react";
import "../src/styles/AddMaintenanceTask.css";

const AddMaintenanceTask = ({ toggleAddTask, addNewTask }) => {
  const [taskName, setTaskName] = useState("");
  const [taskToolsNeeded, setTaskToolsNeeded] = useState("");
  const [taskDueDate, setTaskDueDate] = useState("");
  const [taskNotes, setTaskNotes] = useState("");

  const addTaskStats = () => {
    // Create the new ride object
    const newTask = {
      taskName,
      taskToolsNeeded,
      taskDueDate,
      taskNotes,
    };

    // Add the new ride to the list of rides
    addNewTask(newTask);

    // Reset the form fields
    setTaskName("");
    setTaskToolsNeeded("");
    setTaskDueDate("");
    setTaskNotes("");

    toggleAddTask();
  };

  return (
    <div className="add-new-bike-card-container">
      <div className="title-container">
        <p className="new-bike-title">New Task</p>
      </div>

      <div className="input-field-container">
        <div className="inner-container">
          <p className="input-field-title">TASK NAME</p>
          <input
            name="taskName"
            placeholder="Task Name"
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>

        <div className="inner-container">
          <p className="input-field-title">TOOLS NEEDED</p>
          <input
            name="taskToolsNeeded"
            placeholder="Tools Needed"
            onChange={(e) => setTaskToolsNeeded(e.target.value)}
          />
        </div>

        <div className="inner-container">
          <p className="input-field-title">DUE DATE</p>
          <input
            type="date"
            name="taskDueDate"
            onChange={(e) => setTaskDueDate(e.target.value)}
          />
        </div>

        <div className="inner-container">
          <p className="input-field-title">NOTES</p>
          <textarea
            className="notes-input"
            name="notes"
            placeholder="Notes"
            onChange={(e) => setTaskNotes(e.target.value)}
          />
        </div>
        <div className="add-bike-button-container">
          <button className="add-bike-button" onClick={addTaskStats}>
            Add Task
          </button>
        </div>
        <button className="close-button" onClick={toggleAddTask}>
          Close
        </button>
      </div>
    </div>
  );
};

export default AddMaintenanceTask;
