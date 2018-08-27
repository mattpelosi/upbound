import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class StateMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(prevProps) {
    // const { currentWorkflow } = this.props;
  }

  render() {
    const { currentWorkflow } = this.props;

    if (currentWorkflow === "pending") return null;

    return (
      <div>
        <button
          className="dropdown"
          data-toggle="dropdown"
          style={editButtonStyle}
        >
          <FontAwesomeIcon icon="pencil-alt" color="orange" />
        </button>
        <div className="dropdown-menu dropdown-menu-right">
          <a className="dropdown-item">"item"</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item">"item"</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item">"item"</a>
        </div>
      </div>
    );
  }
}

export default StateMenu;

const editButtonStyle = {
  position: "absolute",
  top: "3%",
  right: "3%",
  background: "white",
  zIndex: "1"
};
