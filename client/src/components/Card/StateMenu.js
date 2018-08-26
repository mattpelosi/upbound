import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class StateMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <button style={editButtonStyle}>
        <FontAwesomeIcon icon="pencil-alt" color="orange" />
      </button>
    );
  }
}

export default StateMenu;

const editButtonStyle = {
    position: "absolute",
    top: "3%",
    right: "3%",
    background: "white"
  };