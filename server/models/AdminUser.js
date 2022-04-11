const db = require('mongoose');

const schema = new db.Schema({
    username: {type: String, unique: true},
    password: {type: String},
    age: {type: Number},
    gender: {type: String}
});

module.exports = db.model('AdminUser', schema);