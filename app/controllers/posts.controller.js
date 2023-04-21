const db = require('../models');
const Post = db.sequelize.models.Post;
const Op = db.Sequelize.Op;

exports.getAllPosts = (req, res) => {
  Post.findAll()
  .then(data=> {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving posts."
    });
  });
}

// exports.createUser = (req, res) => {
  
//     // Validate request
//     if (!req.body.firstName || !req.body.lastName || !req.body.email) {
//       console.log(req.body)
//       res.status(400).send({
//         message: "Content can not be empty!"
//       });
//       return;
//     }
  
//     // Create a User object
//     const user = {
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       email: req.body.email
//     };
  
//     // Save User in the database
//     User.create(user)
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while creating the User."
//         });
//       });
//   };
