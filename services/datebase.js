const Sequelize = require('sequelize');
const config = require('../config');

const {database, user, password, host} = config.mysql;

const sequelize = new Sequelize(database, user, password, {
  host,
  dialect: "mysql",
  timestamps: false,
});

module.exports = sequelize;

// const Sequelize = require('sequelize');
// const config = require('../config');
//
// const Op = Sequelize.Op;
//
// const {database, user, password} = config.mysql;
//
// const operatorsAliases = {
//   $eq: Op.eq,
//   $ne: Op.ne,
//   $gte: Op.gte,
//   $gt: Op.gt,
//   $lte: Op.lte,
//   $lt: Op.lt,
//   $not: Op.not,
//   $in: Op.in,
//   $notIn: Op.notIn,
//   $is: Op.is,
//   $like: Op.like,
//   $notLike: Op.notLike,
//   $iLike: Op.iLike,
//   $notILike: Op.notILike,
//   $regexp: Op.regexp,
//   $notRegexp: Op.notRegexp,
//   $iRegexp: Op.iRegexp,
//   $notIRegexp: Op.notIRegexp,
//   $between: Op.between,
//   $notBetween: Op.notBetween,
//   $overlap: Op.overlap,
//   $contains: Op.contains,
//   $contained: Op.contained,
//   $adjacent: Op.adjacent,
//   $strictLeft: Op.strictLeft,
//   $strictRight: Op.strictRight,
//   $noExtendRight: Op.noExtendRight,
//   $noExtendLeft: Op.noExtendLeft,
//   $and: Op.and,
//   $or: Op.or,
//   $any: Op.any,
//   $all: Op.all,
//   $values: Op.values,
//   $col: Op.col
// };
//
// const sequelize = new Sequelize(database, user, password, {
//   dialect: "mysql",
//   timestamps: false,
//   operatorsAliases: false,
// });
//
//
//
//
//
// module.exports = sequelize;