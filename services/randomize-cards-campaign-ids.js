const fs = require("fs");

const campaigns = JSON.parse(
  fs.readFileSync(`${__dirname}/../models/campaigns.json`, "utf8")
);
const cards = JSON.parse(
  fs.readFileSync(`${__dirname}/../models/cards.json`, "utf8")
);

const loopAndCount = () => {
  for (let i = 0; i < cards.length; i++) {
    console.log(i);
  }
};

// loopAndCount();

console.log(campaigns);
console.log(cards);
