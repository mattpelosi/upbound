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
    return <React.Fragment />;
  }
}

const mapStateToProps = state => ({
  campaign: state.selectedCampaign
});

export default connect(
  mapStateToProps,
  null
)(CardContainer);
