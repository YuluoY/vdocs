module.exports = app => {
    const router = require('express').Router();
    const db = require('mongoose');
    const inflectionMiddleware = require('../../middleware/resource');

    /* region 通用CRUD接口 */
    router.get('/', async (req, res) => {
        const result = await req.Model.find({});
        res.send(result);
    });

    router.post('/', async (req, res) => {
        const result = await req.Model.create(req.body);
        res.send(result);
    });

    router.delete('/', async (req, res) => {
        const result = await req.Model.deleteOne(req.body);
        res.send(result);
    });

    router.patch('/', async (req, res) => {
        const {condition, modify} = req.body;
        const result = await req.Model.findOneAndUpdate(condition, modify); // findOneAndUpdate会返回更新前的行数据
        // const result = await req.Model.updateOne(condition, modify);  // updateOne不会返回更新前的行数据
        res.send(result);
    });

    router.put('/', async (req, res) => {
        const {condition, modify} = req.body;
        const result = await req.Model.updateOne(condition, modify);
        res.send(result);
    });

    app.use('/api/rest/:resource', inflectionMiddleware(), router);
    /* endregion */
}