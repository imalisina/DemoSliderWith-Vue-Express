const mongoose = require('mongoose');

const heroSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'The name field is required.']
    },
    image: {
        type: String,
        required: [true, 'The image field is required.']
    },
    category: {
        type: String,
        required: [true, 'The category field is required.']
    },
    description: {
        type: String,
        required: [true, 'The description field is required.']
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Heroes', heroSchema);