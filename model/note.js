const mongooose = require("mongoose");
const { Schema } = mongooose;
const UserSchema = new Schema({
  title: {
    required: true,
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
},{timestamps:true});

module.exports = mongooose.model("noteapp", UserSchema);
