const mongoose = require("../mongoose");
var userSchema = mongoose.Schema({
    quizID : { type: String },
    displayName: {type: String },
    score: { type: Number }
});
module.exports = mongoose.model("user", userSchema);