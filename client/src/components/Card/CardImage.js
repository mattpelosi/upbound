import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CardImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { primaryMediaUrl} = this.props.data

    return (
      <div style={imgWrapper}>
        <img
          className="card-img-top"
          src={primaryMediaUrl}
          alt="card media"
          style={imgStyle}
        />
        <button style={editButtonStyle}>
          <FontAwesomeIcon icon="pencil-alt" color="orange" />
        </button>
      </div>
    );
  }
}

export default CardImage;

const imgWrapper = {
  height: "50%"
};

const imgStyle = {
  height: "100%"
};

const editButtonStyle = {
  position: "absolute",
  top: "3%",
  right: "3%",
  background: "white"
};
