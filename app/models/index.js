/**
 * Naming convention:
 * Sequelize (caps) refers to the library
 * sequelize (lower) referst to the instance of a db connection
 */
const Sequelize = require("sequelize");
const { configureModels } = require('./modelConfig')

/**
 * Create an instance of sequelixe with db settings
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

// create a db object, for simpler handling ???
const db = {};

// add object properties
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// define models in sequelize
require("./user.model.js")(sequelize, Sequelize);
require("./post.model.js")(sequelize, Sequelize);

configureModels(sequelize);

// export the db object to be used in the server app
module.exports = db;