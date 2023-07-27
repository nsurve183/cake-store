


const mongoose = require('mongoose');

const chocolateCkaeSchema = mongoose.Schema({
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
    timestamp : {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('chocolateCake', chocolateCkaeSchema);