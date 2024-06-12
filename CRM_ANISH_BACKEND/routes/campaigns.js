const express = require('express');
const router = express.Router();
const Campaign = require('../models/Campaign');

// Create Campaign
router.post('/', async (req, res) => {
    const { title, audienceId } = req.body;
    try {
        const newCampaign = new Campaign({ title, audienceId });
        await newCampaign.save();
        res.status(201).send(newCampaign);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get All Campaigns
router.get('/', async (req, res) => {
    try {
        const campaigns = await Campaign.find().populate('audienceId');
        res.status(200).send(campaigns);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
