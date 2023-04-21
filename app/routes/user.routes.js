module.exports = app => {
  const userCtrl = require("../controllers/user.controller.js");

  var router = require("express").Router();
  // router, http method ... parameters: route, controller method

  router.post("/", userCtrl.createUser);

  router.get("/", userCtrl.getAllUsers);

  app.use('/api/users', router);
};