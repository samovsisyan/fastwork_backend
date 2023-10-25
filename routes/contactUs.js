const Sequelize = require('sequelize');
const models = require('../models/ContactUs');
const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const contactUs = await models.findAll();
        res.json({
            status: 'ok',
            contactUs,
        })
    } catch (e) {
        next(e)
    }
});
module.exports = router;