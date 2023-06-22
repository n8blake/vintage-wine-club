const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  hashedPassword: {
    type: String,
  },
  salt: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: "E-mail is Required",
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
  userCreated: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    default: "user",
  },
  shortBio: {
    type: String,
  },
  longBio: {
    type: String
  },
  image: {
    type: Schema.Types.ObjectId, ref: 'Image'
  }
});

UserSchema.plugin(require("mongoose-autopopulate"))
const User = mongoose.model("User", UserSchema);

module.exports = User;