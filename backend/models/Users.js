let mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3

    },
    firstname: {
        type: String,
        required: true,
        minlength: 2
    },
    lastname: {
        type: String,
        required: true,
        minlength: 2
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    createon:{
        type: Date,
        default: Date.now()
    }
})

const User = mongoose.model('User', userSchema);
module.exports = User;