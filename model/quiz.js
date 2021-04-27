const mongoose = require("../mongoose");
var quizSchema = mongoose.Schema({
    title: { type: String },
    category: {type: String }
});
module.exports = mongoose.model("quiz", quizSchema);