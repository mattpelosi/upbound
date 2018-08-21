import React from "react";
import * as axios from "../services/axios.js";
import { connect } from "react-redux";
import { addSelectedCampaign } from "../redux-store/actions.js";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campaigns: []
    };
  }

  componentDidMount() {
    const allCampaigns = { campaignName: "All Campaigns" };
    axios.getCampaigns().then(campaigns => {
      if (campaigns !== undefined) {
        campaigns.unshift(allCampaigns);
        const newState = {
          ...this.state,
          ...{ campaigns: campaigns, selectedCampaign: campaigns[0] }
        };
        this.setState(newState, this.props.addSelectedCampaign(campaigns[0]));
      }
    });
  }

  selectCampaign = index => {
    const campaign = this.state.campaigns[index];
    const newState = { ...this.state, selectedCampaign: campaign };
    this.setState(newState, this.props.addSelectedCampaign(campaign));
  };

  render() {
    const { campaigns } = this.state;
    if (!campaigns || campaigns.length === 0) {
      return null;
    }
    const { campaignName } = this.state.selectedCampaign;
    if (!campaignName) {
      return null;
    }
    const items = campaigns.map((campaign, index) => {
      return (
        <a
          className="dropdown-item"
          key={index}
          onClick={() => this.selectCampaign(index)}
        >
          {campaign.campaignName}
        </a>
      );
    });

    return (
      <nav className="navbar navbar-light bg-light" style={navStyle}>
        <div className="dropdown">
          <button
            className="btn btn-light dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            style={btnStyle}
          >
            {campaignName}
          </button>
          <div className="dropdown-menu">{items}</div>
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addSelectedCampaign: campaign => {
    dispatch(addSelectedCampaign(campaign));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Navbar);

const navStyle = {
  marginTop: "10px",
  boxShadow: "0.5px 0px 0.5px 0.5px #edf1f9",
  border: "1px solid #e6e8ed"
};

const btnStyle = {
  fontWeight: "100",
  boxShadow: "0.5px 0px 0.5px 0.5px #edf1f9",
  border: "1px solid #e6e8ed",
  color: "#6d6f75"
};
