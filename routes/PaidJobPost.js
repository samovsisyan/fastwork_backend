const Sequelize = require('sequelize');
const models = require('../models/PaidJobPost');
const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const PaidJobPost = await models.findAll();
        res.json({
            status: 'ok',
            PaidJobPost,
        })
    } catch (e) {
        next(e)
    }
});


module.exports = router;