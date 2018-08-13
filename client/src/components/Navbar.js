import React from "react";
import * as axios from "../services/axios.js";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const requests = [
      axios.getCampaignFilters(),
      axios.getCampaigns(),
      axios.getCards()
    ];
    Promise.all(requests).then(res => {
      this.setState({ campaignFilters: res });
    });
  }

  render() {
    const { campaignFilters } = this.state;
    if (campaignFilters === "undefined") {
      return (
        <React.Fragment>
          <div>something</div>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <div>something</div>
      </React.Fragment>
    );
  }
}

export default Navbar;
