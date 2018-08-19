let index = 0;

export const addSelectedCampaign = campaign => ({
  type: "ADD_SELECTED_CAMPAIGN",
  campaign,
  index: index++
});
