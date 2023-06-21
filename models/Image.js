const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    original: { type: String, required: true },
    large: { type: String },
    medium: { type: String },
    small: { type: String },
    thumbnail: { type: String }
})

const Image = mongoose.model("Image", ImageSchema)

module.exports = { Image };