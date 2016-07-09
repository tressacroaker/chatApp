var mongoose = require('mongoose');

var chatModel = new mongoose.Schema({
    body: {type: String},
    date: {type: String}
});

module.exports = mongoose.model('Chats', chatModel);
