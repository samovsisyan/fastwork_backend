const Sequelize = require('sequelize');
const models = require('../models/Category');
const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const categories = await models.findAll();
    res.json({
      status: 'ok',
      categories,
    })
  } catch (e) {
    next(e)
  }
});

router.post('/create', async (req, res, next) => {
    try {
        const {
          name,
          type_title,
          type,
          rating,
          img
        } = req.body;
        const categories = await models.create({
            name,
            type_title,
            type,
            rating,
            img
        });
        res.json({
            status: 'ok',
            categories,
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