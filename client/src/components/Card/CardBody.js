import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CardBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { amount } = this.props.data.listOfPlans[0].price;
    const { cardDescription } = this.props.data;

    return (
      <div className="card-body" style={bodyStyle}>
        <p className="card-text" style={textStyle}>
          {cardDescription}
        </p>
        <div className="container" style={progressWrapper}>
          <div
            className="row justify-content-between"
            style={stateButtonWrapper}
          >
            <span>$ {amount} / Month</span>
            <button className="btn btn-light" style={stateButtonStyle}>
              <FontAwesomeIcon icon="circle" style={dotStyle} />
            </button>
          </div>
          <div className="progress row" style={progressStyle}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
              style={progressBarSyle}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CardBody;

const textStyle = {
  whiteSpace: "normal",
  overflow: "hidden",
  textOverflow: "ellipsis",
  height: "60%",
  margin: "0"
};

const progressWrapper = {
  height: "40%"
};

const progressStyle = {
  position: "relative",
  top: "30%"
};

const progressBarSyle = {
  height: "5%"
};

const bodyStyle = {
  height: "40%",
  padding: "10px"
};

const stateButtonWrapper = {
  position: "relative",
  top: "20%",
  color: "#B9BABF",
  fontSize: "75%"
};

const stateButtonStyle = {
  border: "1px solid #e6e8ed",
  width: "17%"
};

const dotStyle = {
  position: "absolute",
  top: "30%",
  right: "0.1%",
  height: "7px"
};
