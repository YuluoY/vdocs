const db = require('mongoose');

const schema = new db.Schema({
    title: {type: String},
    author: {type: String},
    detail: {type: String},
    releaseDate: {type: Date, default: Date.now()},
    updateDate: {type: Date, default: Date.now()}
});

module.exports = db.model('Article', schema);