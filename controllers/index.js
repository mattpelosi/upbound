const path = require("path");
const fs = require("fs");

module.exports = {
  getAllCards: getAllCards,
  getCardsByCampaignId: getCardsByCampaignId,
  getCampaigns: getCampaigns,
  getCardFilters: getCardFilters
};

function getAllCards(req, res) {
  res.sendFile(path.join(`${__dirname}/../models/newCards.json`));
}

function getCardsByCampaignId(req, res) {
  const id = req.params.campaignId;
  const cards = JSON.parse(
    fs.readFileSync(`${__dirname}/../models/newCards.json`, "utf8")
  );
  const filteredCardList = cards.reduce((cardList = [], card) => {
    if (card.campaignId === id) {
      cardList.push(card);
    }
    return cardList;
  }, []);
  res.json(filteredCardList);
}

function getCampaigns(req, res) {
  res.sendFile(path.join(`${__dirname}/../models/campaigns.json`));
}

function getCardFilters(req, res) {
  res.sendFile(path.join(`${__dirname}/../models/filters.json`));
}
