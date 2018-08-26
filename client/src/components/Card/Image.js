import React from "react";
import { ClipLoader } from "react-spinners";

function CardImage(props) {
  const { primaryMediaUrl } = props.data;
  const { currentWorkflow } = props;

  return (
    <div style={imgContainer}>
      <img
        className="card-img-top"
        src={primaryMediaUrl}
        alt="Card media"
        style={currentWorkflow === "pending" ? imgStyle : null}
      />
      {currentWorkflow === "pending" ? (
        <div style={loaderStyle}>
          <ClipLoader
            loading={true}
            color={"white"}
            size={50}
            sizeUnit={"px"}
            width={20}
          />
        </div>
      ) : null}
    </div>
  );
}

export default CardImage;

const imgContainer = {
  textAlign: "center",
  position: "relative"
};

const imgStyle = {
  filter: "blur(5px)"
};

const loaderStyle = {
  position: "absolute",
  margin: "auto",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  height: "20%"
};
