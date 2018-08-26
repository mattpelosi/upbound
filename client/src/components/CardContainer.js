import React from "react";
import { connect } from "react-redux";
import * as axios from "../services/axios.js";
import Card from "./Card/Card.js";

class CardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: null,
      filteredCards: []
    };
  }

  componentDidMount() {
    if (this.state.cards === null) {
      axios.getCards().then(cards => {
        const newState = { ...this.state, cards: cards, filteredCards: cards };
        this.setState(newState);
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.campaign !== prevProps.campaign) {
      if (this.props.campaign.campaignName === "All Campaigns") {
        const newState = { ...this.state, filteredCards: this.state.cards };
        this.setState(newState);
      } else {
        const id = this.props.campaign.id;
        const filteredCards = this.state.cards.reduce((filtered = [], card) => {
          if (card.campaignId === id) {
            filtered.push(card);
          }
          return filtered;
        }, []);
        const newState = { ...this.state, filteredCards: filteredCards };
        this.setState(newState);
      }
    }
  }

  render() {
    const { filteredCards } = this.state;
    if (!filteredCards) {
      return null;
    }
    const filtered = filteredCards.map((card, index) => {
      return <Card cardData={card} key={index} />;
    });
    return (
      <div className="container">
        <div className="row">{filtered}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  campaign: state.selectedCampaign
});

export default connect(
  mapStateToProps,
  null
)(CardContainer);
