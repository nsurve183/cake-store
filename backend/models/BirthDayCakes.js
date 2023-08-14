


const mongoose = require('mongoose');

const birthdayCake = mongoose.Schema({
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

module.exports = mongoose.model('birthdaycake', birthdayCake);

// const mongoose = require('mongoose');

// const uploadSchema = new mongoose.Schema({
//     photo: {
//         type: String
//     }
// })

// module.exports = mongoose.model('image', uploadSchema);


