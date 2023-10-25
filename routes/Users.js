const Sequelize = require('sequelize');
const models = require('../models/Users');
const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const Users = await models.findAll();
    res.json({
      status: 'ok',
      Users,
    })
  } catch (e) {
    next(e)
  }
});
module.exports = router;