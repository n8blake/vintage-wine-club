const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    original: String,
    large: String,
    medium: String,
    small: String,
    thumbnail: String
})

const Image = mongoose.model("Image", ImageSchema)

module.exports = Image;