const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const controllers = require("../controllers");

module.exports = router;

router.get("/api/campaigns", controllers.getCampaigns);

router.get("/api/cards/:campaignId", controllers.getCardsByCampaignId);

router.get("/api/cards", controllers.getAllCards);

router.get("/api/filters", controllers.getCardFilters);
