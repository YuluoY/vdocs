const db = require('mongoose');
const Note = new db.Schema({
    title: {type: String, required: true},
    desc: {type: String, default: '这个作者很勤快，没有留下描述内容！'},
    content: {type: String, required: true},
    updateDate: {type: Date, default: Date.now},
    category: {type: String},
    viewsNum: {type: Number, default: 1}
})

module.exports = db.model('Note', Note, 'note')