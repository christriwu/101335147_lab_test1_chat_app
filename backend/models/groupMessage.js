let mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    from_user: {

    },
    room:{
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date_sent:{
        type: Date,
        default: Date.now()
    }
    
});

const GroupMessage = mongoose.model('GroupMessage', messageSchema);
module.exports = GroupMessage;