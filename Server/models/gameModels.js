const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'The name field is required.']
    },
    company: {
        type: String,
        required: [true, 'The company field is required.']
    },
    category: {
        type: String,
        required: [true, 'The category field is required.']
    },
    price: {
        type: Number,
        required: [true, 'The price field is required.']
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Game', gameSchema);