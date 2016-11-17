var express = require('express');
var db = require('../mongo/index')
var router = express.Router();

var params = ['id', 'password']
router.post('/login', function (req, res) {
    var id = req.body.id
    var password = req.body.password
    if (params.every(str => req.body[str] != undefined)) {
        db.User.findOne({id: id, password: password}, function (err, doc) {
            console.log(doc)
            if (doc != null) {
                res.send(doc)
            } else res.sendStatus(401)
        })
    } else res.sendStatus(403)
})
router.post('/register', function (req, res) {
    var id = req.body.id
    var password = req.body.password
    if (params.every(str => req.body[str] != undefined)) {
        db.User.find({id: id}, function (err, docs) {
            if (docs.length == 0) {
                var newUser = new db.User({
                    id: id,
                    password: password,
                    win: 0,
                    lose: 0
                })
                newUser.save(function (err) {
                    if (err) throw err;
                    else res.sendStatus(200)
                })
            } else res.sendStatus(409)
        })
    }
})
module.exports = router;

