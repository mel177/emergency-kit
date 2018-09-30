const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HomelistSchema = new Schema({
  item: {type: String, required :true }
});

const Items = mongoose.model("Items", HomelistSchema);

module.exports = Items;
