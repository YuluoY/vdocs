module.exports = app => {
    const router = require('express').Router();
    const fs = require('fs');
    const marked = require('marked');
    const to = require('await-to-js').default;

    const User = require('../../models/User');

    router.post('/login', async (req, res) => {
        const {username, password} = req.body;
        const user = await User.findOne({username}).select(`+password`);
        if (!user) {
            res.send({message: `${username}用户不存在！`})
        }
        res.send(user);
    });
    router.post('/register', async (req, res) => {
        const [err, user] = await to(User.create(req.body));
        err ? res.status(422).send(err.message) : res.send(user);
    });


    app.use('/api/web', router);
}