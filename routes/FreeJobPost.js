const Sequelize = require('sequelize');
const models = require('../models/FreeJobPost');
const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const FreeJobPost = await models.findAll();
        res.json({
            status: 'ok',
            FreeJobPost,
        })
    } catch (e) {
        next(e)
    }
});


module.exports = router;