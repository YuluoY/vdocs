module.exports = (app) => {
    const router = require('express').Router();
    const inflectionMiddleware = require('../../middleware/resource');

    /*
    * @desc: 分页查询。
    * @param:[resource]: 表名称，在前端使用category，将会被中间件转换成Category，并将model实例挂载到req对象上。
    * @param:[page]: 第几页，通过页数可以算出我们将跳过多少文档数据。(page-1)*capacity
    * @param:[capacity]: 数据容量，也就是需要返回多少行数据。
    * @url：/api/admin/findPagination/${表名称}/${页数}/${容量}
    * */
    router.get('/findPagination/:resource/:page/:capacity', inflectionMiddleware(), async (req, res) => {
        const {page, capacity} = req.params;
        const list = await req.Model.find({})
            .limit(capacity)
            .skip(Math.floor((page - 1) * capacity));
        const total = await req.Model.count();
        res.send({list, total});
    });

    /* region 使用multer将上传的图片存入本地，并返回图片访问地址 */
    const multerMiddleware = require('../../middleware/multer')({
        dirname: 'admin' // 在服务器目录的upload文件夹下新建admin文件夹并存入。路径：server/upload/admin/xx.jpg
    });
    router.post('/upload/:resource', inflectionMiddleware(), multerMiddleware.single('file'), async (req, res) => {
        let file = req.file;
        file.url = `http://localhost:3000/upload/admin/${file.filename}`
        res.send(file);
    })
    /* endregion */


    app.use('/api/admin', router);
}