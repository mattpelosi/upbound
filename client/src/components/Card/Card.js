import React from "react";
import Image from "./Image";
import Body from "./Body";
import Footer from "./Footer";
import StateMenu from "./StateMenu";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { cardData } = this.props;
    return (
      <div className="col-xs-12 col-md-6 col-lg-3">
        <div className="card" style={cardStyle}>
          <StateMenu />
          <Image data={cardData} />
          <Body data={cardData} />
          <Footer data={cardData} />
        </div>
      </div>
    );
  }
}

export default Card;

const cardStyle = {
  margin: "5px",
  border: "0.5px solid #DEDFE5",
  padding: "1px"
};
