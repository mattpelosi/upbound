import React from "react";
import { connect } from "react-redux";
import update from "immutability-helper";
import * as axios from "../services/axios.js";

class CardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(prevProps) {
    if (this.props.campaign !== prevProps.campaign) {
      if (this.props.campaign.campaignName === "All Campaigns") {
        axios.getCards().then(cards => {
          const newState = update(this.state, {
            cards: { $set: cards }
          });
          this.setState(newState);
        });
      } else {
        const id = this.props.campaign.id;
        axios.getCardsByCampaignId(id).then(cards => {
          const newState = update(this.state, {
            cards: { $set: cards }
          });
          this.setState(newState);
        });
      }
    }
  }

  render() {
    const { cards } = this.state;
    if (!cards) {
      return null;
    }
    const listedCards = cards.map((card, index) => {
      return (
        <div className="card" style={divStyle} key={index}>
          <img className="card-img-top" src={card.primaryMediaUrl} />
          <div className="card-body">
            <p className="card-text">{card.cardDescription}</p>
          </div>
        </div>
      );
    });
    return <div>{listedCards}</div>;
  }
}

const mapStateToProps = state => ({
  campaign: state.selectedCampaign
});

export default connect(
  mapStateToProps,
  null
)(CardContainer);

const divStyle = {
  width: "18rem"
};
