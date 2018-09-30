const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    ""
);

const homeSeed = [
    {
        item: "Water (one gallon per person per day, for drinking and sanitation—up to a 7-day supply)",
    },
    {
        item: "Non-perishable food (up to a 7-day supply per person)",
    },
    {
        item : "Battery-powered radio (with extra batteries) or hand-crank radio.",
    },
    {
        item : "Weather radio with tone alert and extra batteries.",
    },
    {
        item: " Flashlight and extra batteries",
    },
    {
        item : " First-aid supplies",
    },
    {
        item: "Whistle to signal for help",
    },
    {
        item : " Filter mask or cotton t-shirt, to help filter the air",   
    },





];
db.Item
  .remove({})
  .then(() => db.Item.collection.insertMany(itemSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
