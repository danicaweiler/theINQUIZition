const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

let db = mongoose.connection;
mongoose.connect(
    'mongodb+srv://admin:pSOmxUiKPyPm8Ov8@inquizition-db.ao7ml.mongodb.net/inquizition-db?retryWrites=true&w=majority', 
    options
  );

module.exports = mongoose;