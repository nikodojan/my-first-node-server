module.exports = app => {
  const postsCtrl = require("../controllers/posts.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  //router.post("/", postsCtrl.createPost);

  // Retrieve all Tutorials
  router.get("/", postsCtrl.getAllPosts);

  // Retrieve all published Tutorials
  // router.get("/published", tutorials.findAllPublished);

  // // Retrieve a single Tutorial with id
  // router.get("/:id", tutorials.findOne);

  // // Update a Tutorial with id
  // router.put("/:id", tutorials.update);

  // // Delete a Tutorial with id
  // router.delete("/:id", tutorials.delete);

  // // Create a new Tutorial
  // router.delete("/", tutorials.deleteAll);

  app.use('/api/posts', router);
};