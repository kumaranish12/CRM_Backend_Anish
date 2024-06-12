const express = require('express');
const router = express.Router();
const Audience = require('../models/Audience');

// Get all audiences
router.get('/', async (req, res) => {
    try {
        const audiences = await Audience.find();
        res.json(audiences);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create an audience
router.post('/', async (req, res) => {
    const audience = new Audience({
        name: req.body.name,
    });

    try {
        const newAudience = await audience.save();
        res.status(201).json(newAudience);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
