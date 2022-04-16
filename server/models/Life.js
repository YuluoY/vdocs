const db = require('mongoose');

const Life = new db.Schema({
    picture: {type: String, default: '@/assets/logo.png'},
    title: {type: String, required: true},
    content: {type: String, required: true},
    desc: {type: String, default: '这个作者很吊，未留下描述内容！'},
    author: {type: String, trim: true},
    category: {type: String},
    viewsNum: {type: Number, default: 1}
})

module.exports = db.model('Life', Life, 'life')