module.exports = (app) => {

    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost:27017/vdocs', {
        useNewUrlParser: true
    }, (err) => {
        if (err) {
            console.log(err)
        }
        console.log('数据库中的vdocs集合连接成功！');
    });
    require('require-all')(__dirname + '/models')
}