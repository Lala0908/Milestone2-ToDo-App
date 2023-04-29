const mongoose = require("mongoose");
//const Schema = mongoose.Schema;

const TodoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  timestamp: {
    type: String,
    default: Date.now(),
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    default: new mongoose.Types.ObjectId(),
  }
});

module.exports = mongoose.model("Todo", TodoSchema);
