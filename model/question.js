const mongoose = require("../mongoose");
var questionSchema = mongoose.Schema({
    quizID : { type: String },
    questionNum: { type: Number },
    question: { type: String },
    A: { type: Array },
    B: { type: Array },
    C: { type: Array },
    D: { type: Array }

});
module.exports = mongoose.model("question", questionSchema);