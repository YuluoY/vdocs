const db = require('mongoose');

const schema = new db.Schema({
    picture: {type: String, default: '@/assets/logo.png', trim: true},
    title: {type: String, required: true},
    content: {type: String, required: true},
    author: {type: String, trim: true},
    desc: {type: String, default: '这个作者很吊，未留下描述内容！'},
    updateDate: {type: Date, default: Date.now},
    category: {type: String},
    viewsNum: {type: Number, default: 1}
});

module.exports = db.model('Article', schema, 'article');