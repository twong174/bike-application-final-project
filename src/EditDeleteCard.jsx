import React from "react";
import EditLogo from "../src/svg-images/edit.svg";
import DeleteLogo from "../src/svg-images/delete.svg";
import "../src/styles/EditDeleteCard.css";

const EditDeleteCard = ({ position }) => {
  return (
    <div
      className="edit-delete-container"
      style={{
        position: "absolute",
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
    >
      <div className="edit-container">
        <img src={EditLogo} alt="Edit" />
        <p>Edit</p>
      </div>
      <div className="delete-container">
        <img src={DeleteLogo} alt="Delete" />
        <p>Delete</p>
      </div>
    </div>
  );
};

export default EditDeleteCard;
