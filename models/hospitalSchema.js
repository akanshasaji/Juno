const mongoose = require("mongoose");
const hospitalSchema = new mongoose.Schema({
  name: String,
  address: String,
  contactinfo: String,
  timings: String,
  vote: Number,
  count: Number
});

module.exports = mongoose.model("hospital", hospitalSchema);