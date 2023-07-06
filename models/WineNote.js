const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WineNoteSchema = new Schema({
    category: { 
        type: Schema.Types.ObjectId, 
        required: true, 
        ref: 'WineNoteCategory'},
    label: { type: String, required: true, unique: true },
    color: { type: String },
    icon: { type: String },
    description: {
        type: String
    }
})

//WineNoteSchema.plugin(require("mongoose-autopopulate"));
const WineNote = mongoose.model("WineNote", WineNoteSchema);
module.exports = WineNote;