const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 8000;


// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

// Add routes, both API and view
app.use(routes);

  // Connect to mongo
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/emergency_kit")


app.listen(PORT, ()=>{
    console.log(`Port on ${PORT}`)
})

//NEXT STEPS
//  create model for items
// make routes to do data functionality
// Create a utils folder with an API.js file to connect to backend routes via axios
