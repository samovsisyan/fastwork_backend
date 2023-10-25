const Sequelize = require('sequelize');
const models = require('../models/Types');
const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const Types = await models.findAll();
        res.json({
            status: 'ok',
            Types,
        })
    } catch (e) {
        next(e)
    }
});
module.exports = router;