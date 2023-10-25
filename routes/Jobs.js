const Sequelize = require('sequelize');
const models = require('../models/Jobs');
const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const Jobs = await models.findAll();
        res.json({
            status: 'ok',
            Jobs,
        })
    } catch (e) {
        next(e)
    }
});
module.exports = router;