import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { currencySymbol } = this.props.cardData.listOfPlans[0].price;
    const {
      cardDescription,
      views,
      subscribers,
      totalRevenue
    } = this.props.cardData;

    return (
      <div className="card d-flex" style={cardStyle}>
        <div style={imgWrapper}>
          <img
            className="card-img-top"
            src={this.props.cardData.primaryMediaUrl}
            alt="card media"
            style={imgStyle}
          />
          <button style={editButtonStyle}>
            <FontAwesomeIcon icon="pencil-alt" color="orange" />
          </button>
        </div>

        <div className="card-body" style={bodyStyle}>
          <p className="card-text" style={textStyle}>
            {cardDescription}
          </p>
          <div className="container" style={progressWrapper}>
            <div
              className="row justify-content-between"
              style={stateButtonWrapper}
            >
              <span>Text</span>
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

const imgWrapper = {
  height: "50%"
};

const imgStyle = {
  height: "100%"
};

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

const editButtonStyle = {
  position: "absolute",
  top: "3%",
  right: "3%",
  background: "white"
};

const stateButtonWrapper = {
  position: "relative",
  top: "20%"
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
