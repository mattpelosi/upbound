import axios from "axios";

export function getCampaigns() {
  const config = {
    method: "get",
    url: "api/campaigns"
  };
  axios(config)
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(new Error(err));
    });
}

export function getCards() {
  const config = {
    method: "get",
    url: "api/cards"
  };
  axios(config)
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(new Error(err));
    });
}

export function getCampaignFilters() {
  const config = {
    method: "get",
    url: "api/filters"
  };
  axios(config)
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(new Error(err));
    });
}
