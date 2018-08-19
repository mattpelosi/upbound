import React from "react";
import * as axios from "../services/axios.js";
import update from "immutability-helper";

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
      campaigns && campaigns.unshift(allCampaigns);
      const newState = update(this.state, {
        campaigns: {
          $set: campaigns
        },
        selectedCampaign: { $set: campaigns[0] }
      });
      this.setState(newState);
    });
  }

  selectCampaign = index => {
    const campaign = this.state.campaigns[index];
    const newState = update(this.state, {
      selectedCampaign: { $set: campaign }
    });
    this.setState(newState);
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
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-toggle="dropdown"
          >
            {campaignName}
          </button>
          <div className="dropdown-menu">{items}</div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

const navStyle = {
  marginTop: "10px",
  boxShadow: "0.5px 0px 0.5px 0.5px #edf1f9",
  border: "1px solid #e6e8ed"
};
