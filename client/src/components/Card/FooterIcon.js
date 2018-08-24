import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FooterIcon(props) {
  const { data, icon, special } = props;
  return (
    <div
      className="col d-flex align-items-center justify-content-center"
      style={iconStyle}
    >
      <FontAwesomeIcon icon={icon} color="#7B7C7F" size="2x" />
      <span style={iconText}>
        {special} {data}
      </span>
    </div>
  );
}

const iconStyle = {
  paddingRight: "0px"
};

const iconText = {
  paddingLeft: "5px"
};
