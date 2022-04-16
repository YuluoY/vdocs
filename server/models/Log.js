const db = require('mongoose');
const Log = new db.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    releaseDate: {type: Date, default: Date.now},
    viewsNum: {type: Number, default: 1}
})

module.exports = db.model('Log', Log, 'log');