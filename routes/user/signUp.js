// const Sequelize = require('sequelize');
// const User = require('../../models/User');
// const express = require('express');
// const router = express.Router();
// const {jwtSecret} = require('../../config');
// const {secret} = require('../../config');
// const jwt = require('jsonwebtoken');
//
// const md5 = require('md5');
//
//
// const bcrypt = require('bcryptjs');
//
//
// // const bodyParser = require('body-parser');
// // router.use(bodyParser.urlencoded({extended: false}));
// // router.use(bodyParser.json());
//
// router.post('/', function (req, res, next) {
//   try {
//
//     User.create({
//       username: req.body.username,
//       password: md5(req.body.password),
//       email: req.body.email,
//       // role: req.body.role,
//       // img: req.body.img,
//
//     });
//
//     // const hashedPassword = bcrypt.hashSync(req.body.password, 8);
//     const token = jwt.sign({id: User.id}, secret, {
//       expiresIn: 86400 // expires in 24 hours
//     });
//     // req.session.token = token;
//     return res.status(200).send({auth: true, token: token});
//
//
//   } catch (e) {
//     next(e)
//   }
// });
//
// module.exports = router;