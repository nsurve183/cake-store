

const mongoose = require('mongoose');

const cupCakes = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true  
    },
    cost: {
        type: Number,
        require: true
    },
    image: {
        type: String,
    },
    timestamp : {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('cupcakes', cupCakes);