import React from "react";

function CardImage(props) {
  const { primaryMediaUrl } = props.data;

  return (
    <div>
      <img className="card-img-top" src={primaryMediaUrl} alt="Card media" />
    </div>
  );
}

export default CardImage;
