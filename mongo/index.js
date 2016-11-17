var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/shibijangi', function (err) {
    if (err) throw err;
})
var User = mongoose.model('users', new mongoose.Schema({
    id: {
        type: String
    },
    password: {
        type: String
    },
    win: {
        type: Number
    },
    lose: {
        type: Number
    }
}))
exports.User = User;
