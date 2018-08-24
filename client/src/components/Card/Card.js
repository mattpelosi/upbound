import React from "react";
import CardImage from "./Image";
import CardBody from "./Body";
import CardFooter from "./Footer";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="col-xs-12 col-md-6 col-lg-3">
        <div className="card" style={cardStyle}>
          <CardImage data={this.props.cardData} />
          <CardBody data={this.props.cardData} />
          <CardFooter data={this.props.cardData} />
        </div>
      </div>
    );
  }
}

export default Card;

const cardStyle = {
  margin: "5px",
  border: "0.5px solid #DEDFE5",
  padding: "1px"
};
