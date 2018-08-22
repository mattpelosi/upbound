import React from "react";
import CardImage from "./CardImage";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="card d-flex" style={cardStyle}>
        <CardImage data={this.props.cardData} />
        <CardBody data={this.props.cardData} />
        <CardFooter data={this.props.cardData} />
      </div>
    );
  }
}

export default Card;

const cardStyle = {
  height: "75vh",
  width: "18rem",
  margin: "5px",
  border: "0.5px solid #DEDFE5",
  padding: "1px"
};
