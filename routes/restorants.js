const Sequelize = require('sequelize');
const models = require('../models/Restorants');
const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const restorants = await models.findAll();
    res.json({
      status: 'ok',
      restorants,
    })
  } catch (e) {
    next(e)
  }
});

router.post('/create', async (req, res, next) => {
  try {
    const {
      name,
      rating,
      category_id,
      count,
      price,
      all_price,
      img
    } = req.body;
    const restorants = await models.create({
      name,
      rating,
      category_id,
      count,
      price,
      all_price,
      img
    });
    res.json({
      status: 'ok',
      restorants,
    })

  } catch (e) {
    next(e)
  }
});


router.post('/', async (req, res, next) => {
  try {

    // const { name, description, user_id, blog_id } = req.param("id");
    // const name = req.param("name");
    // const description = req.param("description");
    // const user_id = req.param("user_id");
    // const blog_id = req.param("blog_id");
    const {  username, password, email, role, img } = req.body;

    const users = await models.create({
      username,
      password,
      email,
      role,
      img
    });

    res.send({
      status: "ok",
      users
    })

  } catch (e) {
    next(e)

  }
});


module.exports = router;