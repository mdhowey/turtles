const mongoose = require('mongoose')
const turtleSchema = new mongoose.Schema({
  name: String,
  role: String
});

// Schema - blueprint - handles validation, interface with the Db
// handle creating a 'reviews' collection
// meta information - timstamps / updates / data formatting

const Turtle = mongoose.model("Turtle", turtleSchema);

module.exports = Turtle