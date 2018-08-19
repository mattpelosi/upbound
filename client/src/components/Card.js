import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="card" style={divStyle}>
        <img
          className="card-img-top"
          src={this.props.cardData.primaryMediaUrl}
          alt="card media"
        />
        <div className="card-body">
          <p className="card-text">{this.props.cardData.cardDescription}</p>
        </div>
      </div>
    );
  }
}

export default Card;

const divStyle = {
  width: "18rem"
};
