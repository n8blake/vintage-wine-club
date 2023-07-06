const mongoose = require('mongoose');
//const WineComposition = require('./WineComposition');
const Schema = mongoose.Schema;

const WineSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    image: { type: Schema.Types.ObjectId, ref: 'Image' },
    abv: { type: Number },
    vintage: {type: Number },
    color: {type: String},
    sparkling: {type: Boolean},
    origin: { type: Schema.Types.ObjectId, ref: 'Location' },
    composition: [
        {
            grape: {type: String, required: true },
            percentage: {
                type: Number, 
                required: false,
                min: 0,
                max: 1 
            } 
        }
    ]
});

const Wine = mongoose.model("Wine", WineSchema);

module.exports = Wine