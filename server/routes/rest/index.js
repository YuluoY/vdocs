const marked = require("marked");
module.exports = app => {
    const router = require('express').Router();
    const db = require('mongoose');
    const marked = require('marked')
    const inflectionMiddleware = require('../../middleware/resource');

    /* region 通用CRUD接口 */
    router.get('/', async (req, res) => {
        let result = null;
        if (JSON.stringify(req.query) !== '{}') {  // 查询子类
            const parent = await req.Model.findOne(req.query);
            result = await req.Model.find().where({parent: parent}).lean();
        } else {
            result = await req.Model.find();
        }
        res.send(result);
    });

    /*
    * $axios.post('/api/rest/modelName', obj)
    * */
    router.post('/', async (req, res) => {
        if(req.Model.modelName === 'Article'){
            req.body.content = marked.parse(req.body.content);
        }
        const result = await req.Model.create(req.body);
        res.send(result);
    });

    /*
    * $axios.delete('...', {data:{key:val}})
    * */
    router.delete('/', async (req, res) => {
        const result = await req.Model.deleteOne(req.body);
        res.send(result);
    });

    /*
    * $axios.patch('...', {condition:{key:val}, modify:{key:val}});
    * */
    router.patch('/', async (req, res) => {
        const {condition, modify} = req.body;
        const result = await req.Model.findOneAndUpdate(condition, modify); // findOneAndUpdate会返回更新前的行数据
        // const result = await req.Model.updateOne(condition, modify);  // updateOne不会返回更新前的行数据
        res.send(result);
    });

    /*
    * 同patch，但put是更新整体，patch用于更新局部
    * */
    router.put('/', async (req, res) => {
        const {condition, modify} = req.body;
        const result = await req.Model.updateOne(condition, modify);
        res.send(result);
    });

    app.use('/api/rest/:resource', inflectionMiddleware(), router);
    /* endregion */
}