import update from "immutability-helper";

const campaignData = (state = {}, action) => {
  switch (action.type) {
    case "ADD_SELECTED_CAMPAIGN": {
      const newState = update(state, {
        selectedCampaign: { $set: action.campaign }
      });
      return newState;
    }
    default:
      return state;
  }
};

export default campaignData;
