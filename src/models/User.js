// Imports
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    discord_id: {
      type: Number,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    level: {
      type: Number,
      required: true,
    },
    xp: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema)

module.exports = User