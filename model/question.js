const mongoose = require("../mongoose");

var answerSchema = mongoose.Schema({
    type: Array
});

var questionSchema = mongoose.Schema({
    quizID : { type: String },
    questionNum: { type: Number },
    question: { type: String },
    answers: [[answerSchema]]
    }
);
module.exports = mongoose.model("question", questionSchema);