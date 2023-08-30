


const mongoose = require('mongoose');

const adminSignup = new mongoose.Schema({
    useradmin:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'useradmin'
    },
    name: {
        type: String,
        require: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        unique: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("admin", adminSignup)