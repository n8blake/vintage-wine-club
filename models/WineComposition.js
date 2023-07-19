const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WineCompositionSchema = new Schema({
    grape: { type: String, required: true },
    varietal: { type: Schema.Types.ObjectId, ref: 'GrapeVarietal' },
    percentage: {
        type: Number, 
        required: false,
        min: 0,
        max: 1 
    }
})

const WineComposition = mongoose.model("WineComposition", WineCompositionSchema)

module.exports = { WineComposition, WineCompositionSchema }