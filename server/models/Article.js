const db = require('mongoose');

const schema = new db.Schema({
    photo: {type: String},  // 照片
    title: {type: String, required: true}, // 文章标题
    content: {type: String, required: true}, // 文章内容
    author: {type: db.SchemaTypes.ObjectId, ref: 'User'}, // 文章作者
    desc: {type: String, default: '这个作者很吊，未留下描述内容！'}, // 文章描述
    updateDate: {type: Date, default: Date.now}, // 更新时间
    categories: [{type: db.SchemaTypes.ObjectId, ref: 'Category'}], // 文章类别
    viewsNum: {type: Number, default: 1} // 文章浏览次数
});

module.exports = db.model('Article', schema, 'article');