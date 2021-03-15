const mongoose = require("mongoose");
const jobSchema = new mongoose.Schema({
    jobtitle: String,
    company: String,
    source: String,
    pay: String,
    offer: Number,
    sourcesite: String,
    vote: Number,
    count: Number
});

module.exports = mongoose.model("job", jobSchema);