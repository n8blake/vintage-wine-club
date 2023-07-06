const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WineNoteCategorySchema = new Schema({
    category: { type: String, required: true, unique: true, trim: true },
    color: { type: String },
    description: {
        type: String
    }
})

const WineNoteCategory = mongoose.model("WineNoteCategory", WineNoteCategorySchema);
module.exports = WineNoteCategory;