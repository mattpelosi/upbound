import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class StateIndicator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { amount } = this.props;

    return (
      <div
        className="d-flex justify-content-between align-items-center"
        style={stateDisplayWrapper}
      >
        <span style={{ padding: "0" }}>$ {amount} / Month</span>
        <div className="btn btn-light" style={stateDisplayStyle}>
          <FontAwesomeIcon icon="circle" style={dotStyle} />
        </div>
      </div>
    );
  }
}

export default StateIndicator;

const stateDisplayWrapper = {
  height: "30px",
  position: "relative",
  top: "20%",
  color: "#B9BABF",
  fontSize: "75%"
};

const dotStyle = {
  position: "absolute",
  top: "30%",
  right: "0.1%",
  height: "7px"
};

const stateDisplayStyle = {
  border: "1px solid #e6e8ed",
  width: "15%",
  height: "70%"
};
