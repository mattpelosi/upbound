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
      const id = this.props.campaign.id;
      axios.getCardsByCampaignId(id).then(cards => {
        console.log("react",cards);
      });
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
