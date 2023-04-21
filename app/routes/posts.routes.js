module.exports = app => {
  const postsCtrl = require("../controllers/posts.controller.js");

  var router = require("express").Router();

  router.get("/", postsCtrl.getAllPosts);

  app.use('/api/posts', router);
};