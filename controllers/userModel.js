const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  username: {
    type: string,
    require: [true, 'User must have a username'],
    unique: true,
  },
  password: {
    type: string,
    require: [true, 'User must have a password'],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;