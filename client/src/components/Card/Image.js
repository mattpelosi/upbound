import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CardImage(props) {
  const { primaryMediaUrl } = props.data;

  return (
    <div>
      <img
        className="card-img-top"
        src={primaryMediaUrl}
        alt="Card media"
      />
      <button style={editButtonStyle}>
        <FontAwesomeIcon icon="pencil-alt" color="orange" />
      </button>
    </div>
  );
}

export default CardImage;

const editButtonStyle = {
  position: "absolute",
  top: "3%",
  right: "3%",
  background: "white"
};
