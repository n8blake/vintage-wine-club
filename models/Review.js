const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    reviewers: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
    wine: { type: Schema.Types.ObjectId, ref: 'Wine', required: true },
    reviewDate: {
        type: Date,
        require: true,
        default: Date.now
    },
    text: { type: String },
    visualProfile: {
        color: { type: String },
        clarity: { type: Number }
    },
    tasteProfile:{
        tastingNotes: [
            {
                note: { type: Schema.Types.ObjectId, ref: 'WineNote' },
                value: { type: Number },
                text: { type: String }
            }
        ],
        sweetness: {
            value: { type: Number}
        }, 
        acidity: {
            value: { type: Number}
        }, 
        tannin: {
            value: { type: Number}
        },
        alcohol: {
            value: { type: Number}
        },
        body: {
            value: { type: Number}
        },
        finish: {
            value: { type: Number}
        },
        balance: {
            value: { type: Number}
        },
        effervescence: {
            value: { type: Number}
        },
        bubbleSize: {
            value: { type: Number}
        }
    },
    smellProfile: {
        smellingNotes: [
            {
                note: { type: Schema.Types.ObjectId, ref: 'WineNote' },
                value: { type: Number },
                text: { type: String }
            }
        ],
        
    },
    images: [
        {
            image: { type: Schema.Types.ObjectId, ref: 'Image'}
        }
    ]
    


})

const Review = mongoose.model("Review", ReviewSchema);
module.exports = Review;