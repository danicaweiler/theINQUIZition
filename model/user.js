const mongoose = require("../mongoose");
var userSchema = mongoose.Schema({
    quizID : { type: String },
    sessionID: { type: String },
    displayName: {type: String }
});
module.exports = mongoose.model("user", userSchema);