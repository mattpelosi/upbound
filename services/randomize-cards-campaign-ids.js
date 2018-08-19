const fs = require("fs");

const campaigns = JSON.parse(
  fs.readFileSync(`${__dirname}/../models/campaigns.json`, "utf8")
);
const cards = JSON.parse(
  fs.readFileSync(`${__dirname}/../models/cards.json`, "utf8")
);

const selectRandomCampaignId = () => {
  const campaign = campaigns[Math.floor(Math.random() * campaigns.length)];
  return campaign.id;
};

const buildCampaignIdList = () => {
  const ids = [];
  let campaignId = null;

  for (let i = 0; i < cards.length; i++) {
    let randomId = selectRandomCampaignId();
    if (randomId !== campaignId) {
      campaignId = randomId;
    } else {
      while (randomId === campaignId) {
        campaignId = selectRandomCampaignId();
      }
    }
    ids.push(campaignId);
  }
  return ids;
};

const newCampaignIds = buildCampaignIdList();

const insertNewCampaignIds = () => {
  for (let i = 0; i < cards.length; i++) {
    cards[i].campaignId = newCampaignIds[i];
  }
};

insertNewCampaignIds();
const cardsWithNewIds = JSON.stringify(cards);

fs.writeFileSync(
  `${__dirname}/../models/newCards.json`,
  cardsWithNewIds,
  err => {
    if (err) {
      throw err;
    }
    console.log("The file has been written");
  }
);
