


const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    fname: {
        type: String,
        require: true
    },
    lname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
    },
    phnumber: {
        type: Number,
        require: true,
    },
    massage: {
        type: String,
        require: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('contact', contactSchema);