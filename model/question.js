const mongoose = require("../mongoose");
var questionSchema = mongoose.Schema({
    quizID : { type: String },
    questionNum: { type: Number },
    question: { type: String },
    A: { type: String },
    B: { type: String },
    C: { type: String },
    D: { type: String },
    correctAnswer: { type: String }
});
module.exports = mongoose.model("question", questionSchema);