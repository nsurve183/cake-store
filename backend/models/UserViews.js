
const mongoose = require('mongoose');

const userViewsSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
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