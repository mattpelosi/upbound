import React from "react";
import StateIndicator from "./StateIndicator";
import ProgressBar from "./ProgressBar";

class CardBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidUpdate(prevProps){
  //   while()
  // }

  render() {
    const { amount } = this.props.data.listOfPlans[0].price;
    const { cardDescription } = this.props.data;

    return (
      <div className="card-body" style={bodyStyle}>
        <p className="card-text" style={textStyle}>
          {cardDescription}
        </p>
        <StateIndicator amount={amount} />
        <ProgressBar />
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
