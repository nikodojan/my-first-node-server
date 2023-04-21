/**
 * Naming convention:
 * Sequelize (caps) refers to the library
 * sequelize (lower) referst to the instance of a db connection
 */
const Sequelize = require("sequelize");

/**
 * testdb: databse name
 * root: username
 * '': password
 * settings 
 */
const sequelize = new Sequelize('testdb', 'root', '', {
  host: "localhost",
  dialect: "mysql",
  port: 3306
});

const db = {};

// create a db object
//const db = require('./models');

// add object properties
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// add model to db object and pass the sequelize obj as parameters for the model 
db.Users = require("./user.model.js")(sequelize, Sequelize);
db.Posts = require("./post.model.js")(sequelize, Sequelize);

db.Posts.belongsTo(db.Users);

db.Users.hasMany(db.Posts);

// export the db object
module.exports = db;