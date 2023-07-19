const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GrapeVarietalSchema = new Schema({
    name: { type: String, required: true },
    synonyms: { type: Array, of: String },
    originLocation: { type: Schema.Types.ObjectId, ref: 'Location' },
    origin: { type: String },
    pedigree: { type: String },
    year: { type: String },
    type: { type: String }
})

const GrapeVarietal = mongoose.model("GrapeVarietal", GrapeVarietalSchema);

module.exports = GrapeVarietal;