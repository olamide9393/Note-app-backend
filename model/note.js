const { default: mongoose } = require("mongoose");
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
  
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
},{timestamps:true});

module.exports = mongooose.model("noteapp", UserSchema);
