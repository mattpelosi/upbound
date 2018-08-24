import React from "react";
import FooterIcon from "./FooterIcon";

class CardFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { views, subscribers, totalRevenue } = this.props.data;

    return (
      <div className="card-footer" style={footerStyle}>
        <div className="row d-flex justify-content-between">
          <FooterIcon icon={"database"} data={totalRevenue} special={"$"} />
          <FooterIcon icon={"user-friends"} data={subscribers} />
          <FooterIcon icon={"eye"} data={views} />
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
