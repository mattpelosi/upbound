import React from "react";
import * as axios from "../services/axios.js";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.getCampaignFilters().then(result => {
      this.setState({ campaignFilters: result });
    });
  }

  render() {
    const { campaignFilters } = this.state;
    if (campaignFilters === "undefined") {
      return null;
    }
    return (
      <React.Fragment>
        <div>{this.state.campaignFilters}</div>
      </React.Fragment>
    );
  }
}

export default Navbar;
