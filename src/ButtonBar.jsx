import React from "react";
import "../src/styles/ButtonBar.css";

const ButtonBar = (props) => {
  return (
    <div className="button-bar-container">
      <p className="button-bar-title">{props.title}</p>

      <div className="button-container">
        <div className="left-button-container">
          <img src={props.leftLogo} alt="Left Logo" />
          <button className="left-button" onClick={props.onLeftClick}>
            {props.leftButton}
          </button>
        </div>

        <div className="right-button-container">
          <img src={props.rightLogo} alt="Right Logo" />
          <button className="right-button" onClick={props.onRightClick}>
            {props.rightButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonBar;
