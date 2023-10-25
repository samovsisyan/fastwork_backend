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
// router.get('/me', function (req, res, next) {
//   try {
//
//     const token = req.headers['x-access-token'];
//     if (!token) return res.status(401).send({auth: false, message: 'No token provided.'});
//
//     jwt.verify(token, config.secret, function (err, decoded) {
//       if (err) return res.status(500).send({auth: false, message: 'Failed to authenticate token.'});
//
//       res.status(200).send(decoded);
//
//       User.findById(decoded.id, function (err, user) {
//         if (err) return res.status(500).send("There was a problem finding the user.");
//         if (!user) return res.status(404).send("No user found.");
//
//         res.status(200).send(user);
//       });
//
//     });
//
//   } catch (e) {
//     next(e)
//   }
// });
//
//
// router.post('/', async (req, res, next) => {
//   try {
//     console.log(132)
//     let user = await User.findOne({
//       where: {
//         username: req.body.username,
//         password: md5(req.body.password)
//       }
//     });
//     // if (user.role == "user") {
//       const token = jwt.sign({id: user.id}, secret, {
//         expiresIn: 86400 // expires in 24 hours
//       });
//
//       jwt.verify(token, secret, function (err, decoded) {
//         // req.session.token = token;
//
//
//         user.dataValues.token =  token;
//
//         console.log(user);
//         return res.status(200).send({auth: true, token: token, user: user  });
//       })
//     // }else {
//     //   return res.status(500).send({auth: "error" });
//
//     // }
//
//     res.status(401).send({status: "error"});
//   } catch (e) {
//     next(e)
//   }
// });
//
//
//
// module.exports = router;