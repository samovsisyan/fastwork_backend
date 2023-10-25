const { jwtSecret } = require('../config');
const jwt = require('jsonwebtoken');
const url = require("url");

function authorization(req, res, next) {
  if (req.method === 'OPTIONS') {
    return next()
  }

  const pathname = url.parse(req.url).pathname;
  console.log('pathname', pathname)
  // if (pathname !== '/users/login') {
  //     const token = req.headers['authorization'];
  //     const decoded = jwt.verify(token, jwtSecret);
  //     req.userId = decoded.userId;
  //     req.userRole = decoded.userRole;
  // }
  // if (pathname !== '/signup/Login') {
  //     const token = req.headers['authorization'];
  //     const decoded = jwt.verify(token, jwtSecret);
  //     req.userId = decoded.userId;
  //     req.userRole = decoded.userRole;
  // }
  next();
}


module.exports = authorization;