import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CardFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { views, subscribers, totalRevenue } = this.props.data;
    const { currencySymbol } = this.props.data.listOfPlans[0].price;

    return (
      <div className="card-footer" style={footerStyle}>
        <div className="row d-flex justify-content-between">
          <div
            className="col d-flex align-items-center justify-content-between"
            style={iconStyle}
          >
            <FontAwesomeIcon icon="database" color="#7B7C7F" size="2x" />
            <span style={iconText}>
              {currencySymbol === "" ? "$" : currencySymbol}
              {totalRevenue}
            </span>
          </div>
          <div
            className="col d-flex align-items-center justify-content-between"
            style={iconStyle}
          >
            <FontAwesomeIcon icon="user-friends" color="#7B7C7F" size="2x" />
            <span style={iconText}>{subscribers}</span>
          </div>
          <div
            className="col d-flex align-items-center justify-content-between"
            style={iconStyle}
          >
            <FontAwesomeIcon icon="eye" color="#7B7C7F" size="2x" />
            <span style={iconText}>{views}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CardFooter;

const footerStyle = {
  background: "#e6e8ed",
  height: "10%",
  fontSize: "75%",
  color: "#7B7C7F",
  borderTop: "0"
};

const iconStyle = {
  paddingRight: "0px"
};

const iconText = {
  position: "relative",
  right: "40%"
};
