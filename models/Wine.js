const mongoose = require('mongoose');
const WineComposition = require('./WineComposition');
const Schema = mongoose.Schema;

const WineSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    image: { type: Schema.Types.ObjectId, ref: 'Image' },
    abv: { type: Number },
    vintage: {type: Number },
    color: {type: String},
    origin: { type: Schema.Types.ObjectId, ref: 'Location' },
    composition: {type: Array, of: WineComposition.WineCompositionSchema}
});

const Wine = mongoose.model("Wine", WineSchema);

module.exports = Wine