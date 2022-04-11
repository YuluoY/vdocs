const db = require('mongoose');
const mongoose = require("mongoose");

const schema = new db.Schema({
    name: {type: String},
    parent: {type: mongoose.SchemaTypes.ObjectId, ref: 'Category'},
});

schema.virtual('children', {
    localField: '_id',
    foreignField: '_parent',
    justOne: false,
    ref: 'Category'
});

module.exports = db.model('Category', schema);