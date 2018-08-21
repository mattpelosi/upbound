import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="card d-flex" style={cardStyle}>
        <img
          className="card-img-top"
          src={this.props.cardData.primaryMediaUrl}
          alt="card media"
          style={imgStyle}
        />
        <div className="card-body" style={bodyStyle}>
          <p className="card-text" style={textStyle}>
            {this.props.cardData.cardDescription}
          </p>
          <div className="progress" style={progressStyle}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
              //   style={}
            />
          </div>
        </div>
        <div className="card-footer" style={footerStyle}>
          <div className="row">
            <div className="col d-flex align-items-center justify-content-between" style={iconStyle}>
              <FontAwesomeIcon icon="database" color="#7B7C7F" size="2x" />
              <span>$5000</span>
            </div>
            <div className="col d-flex align-items-center justify-content-between" style={iconStyle}>
              <FontAwesomeIcon icon="user-friends" color="#7B7C7F" size="2x" />
              <span>$5000</span>
            </div>
            <div className="col d-flex align-items-center justify-content-between" style={iconStyle}>
              <FontAwesomeIcon icon="eye" color="#7B7C7F" size="2x" />
              <span>$5000</span>
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

const imgStyle = {
  height: "50%"
};

const textStyle = {
  whiteSpace: "normal",
  overflow: "hidden",
  textOverflow: "ellipsis",
  height: "60%",
  margin: "0"
};

const progressStyle = {
  position: "relative",
  top: "30px",
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
