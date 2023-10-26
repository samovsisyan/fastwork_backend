const Sequelize = require('sequelize');
const models = require('../models/Company');
const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const company = await models.findAll();
        res.json({
            status: 'ok',
            company,
        })
    } catch (e) {
        next(e)
    }
});


router.post('/create', async (req, res, next) => {
    try {
        const company = await models.create(req.body);
        res.json({
            status: 'ok',
            company,
        })
    } catch (e) {
        next(e)
    }
});


module.exports = router;