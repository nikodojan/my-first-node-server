// import the required modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = process.env.PORT || 8080;



// Create and configure app
// create an express app
const app = express();

// let the app use cors
app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/health', (req, res) => {
  res.json({message: "Test server is running"})
});

require('./app/routes/user.routes')(app);
require('./app/routes/posts.routes')(app);

const db = require("./app/models");

db.sequelize.sync().then(
  app.listen(PORT,  ()=> {
    console.log(`Server is running on port ${PORT}`)
  })
);
// let the app listen for requests on the specified port
// port, callback upon start
