const mongoose = require("../mongoose");
var questionSchema = mongoose.Schema({
    quizID : { type: String },
    question: { type: String },
    a: { type: String },
    b: { type: String },
    c: { type: String },
    d: { type: String },
    correctAnswer: {type: String }
});
module.exports = mongoose.model("question", questionSchema);