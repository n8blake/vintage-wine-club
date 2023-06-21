const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WaitListUserSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: "E-mail is Required",
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  userCreated: {
    type: Date,
    default: Date.now
  }
});

const WaitListUser = mongoose.model("WaitListUser", WaitListUserSchema);

module.exports = WaitListUser;