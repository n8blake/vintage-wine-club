const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const LocationSchema = new Schema({
    lat: { type: Number },
    lon: { type: Number },
    name: { type: String },
    description: { type: String },
    country: { type: String },
    region: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    province: {type: String },
    postalCode: { type: String },
    zLevel: { type: Number }
});

const Location = mongoose.model("Location", LocationSchema);

module.exports = { Location };