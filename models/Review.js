const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    reviewer: { type: Schema.Types.ObjectId, ref: 'User'},
    wine: { type: Schema.Types.ObjectId, ref: 'Wine' },
    text: { type: String }
})

const Review = mongoose.model("Review", ReviewSchema);
module.exports = Review;