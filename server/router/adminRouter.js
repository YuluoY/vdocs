module.exports = (app) => {
    const router = require('express').Router();
    const db = require('mongoose');
    const AdminUser = db.model('AdminUser');

    router.post('/api/admin/login', async (req, res) => {
        const {username, password} = req.body;
        const user = await AdminUser.findOne({username}).select(`+password`);
        if (!user) {
            res.send({
                message: `${username}用户不存在！`
            })
        }
        res.send(user);
    });
    router.post('/api/admin/register', async (req, res) => {
        const user = await AdminUser.create(req.body);
        res.send(user);
    });

    return router;
}