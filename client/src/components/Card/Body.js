import React from "react";
import StateIndicator from "./StateIndicator";

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
        <StateIndicator amount={amount}/>
        <div className="progress" style={progressStyle}>
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
      </div>
    );
  }
}

export default CardBody;

const bodyStyle = {
  height: "50%",
  padding: "10px"
};

const textStyle = {
  height: "50px",
  whiteSpace: "pre-wrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  margin: "0"
};

const progressStyle = {
  position: "relative",
  top: "30%",
  height: "10px",
  background: "#DEDFE5"
};
