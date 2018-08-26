import React from "react";

function ProgressBar(props) {
  return (
    <div className="progress" style={progressStyle}>
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
        width={props.width}
      />
    </div>
  );
}

export default ProgressBar;

const progressStyle = {
  position: "relative",
  top: "30%",
  height: "10px",
  background: "#DEDFE5"
};
