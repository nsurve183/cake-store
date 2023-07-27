
const mongoose = require('mongoose');

const userViewsSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    timestamp : {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('views', userViewsSchema);