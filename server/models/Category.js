const db = require('mongoose');

const schema = new db.Schema({
    name: {type: String, required: true, index: true},
    parent: [{type: db.SchemaTypes.ObjectId, ref: 'Category', default: []}]
});

schema.virtual('children', {
    localField: '_id',
    foreignField: 'parent',
    justOne: false,
    ref: 'Category'
})

schema.virtual("articleList", {
    localField: "_id",
    foreignField: "cate",
    justOne: false,
    ref: "Article",
});
module.exports = db.model('Category', schema, 'category');