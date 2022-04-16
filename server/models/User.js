const db = require('mongoose');

const schema = new db.Schema({
    username: {type: String, default: 'Anonymous', unique: true},
    password: {type: String, required: true, minlength: 6},
    age: {type: Number, default: 3, max: 150, min: 0},
    gender: {type: String, default: '男', enum: ['男', '女']},
    date: {
        type: Date, default: Date.now,
        // set(val) {
        //     return val + 28800000;
        // }
    },
    isAdmin: {type: Boolean, default: false},
});

module.exports = db.model('User', schema, 'user');