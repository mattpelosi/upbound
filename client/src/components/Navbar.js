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
      <nav class="navbar navbar-light bg-light" style={navStyle}>
        <a class="navbar-brand" href="#">
          Navbar
        </a>
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
