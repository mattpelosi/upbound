import axios from "axios";

export function getCampaigns() {
  const config = {
    method: "get",
    url: "api/campaigns"
  };
  return axios(config)
    .then(res => {
      return res.data;
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
  return axios(config)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(new Error(err));
    });
}

export function getCardsByCampaignId(campaignId) {
  const config = {
    method: "get",
    url: `api/cards/${campaignId}`
  };
  return axios(config)
    .then(res => {
      return res.data;
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
  return axios(config)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(new Error(err));
    });
}
