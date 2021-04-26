const mongoose = require("../mongoose");
var quizSchema = mongoose.Schema({
    quizID : { type: String },
    title: { type: String },
    category: {type: String }
});
module.exports = mongoose.model("quiz", quizSchema);