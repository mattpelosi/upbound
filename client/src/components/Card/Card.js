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

  componentDidMount() {
    const { currentWorkflow } = this.props.cardData;
    this.setState({ currentWorkflow: "pending" });
  }

  componentDidUpdate(prevProps) {
    setTimeout(() => {
      this.setState({ currentWorkflow: "" });
    }, 5000);
  }

  render() {
    const { currentWorkflow } = this.state;
    const { cardData } = this.props;
    return (
      <div className="col-xs-12 col-md-6 col-lg-3">
        <div className="card" style={cardStyle}>
          <StateMenu />
          <Image data={cardData} currentWorkflow={currentWorkflow} />
          <Body data={cardData} currentWorkflow={currentWorkflow} />
          <Footer data={cardData} currentWorkflow={currentWorkflow} />
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
