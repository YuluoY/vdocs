module.exports = options => {
    const multer = require('multer');
    const path = require('path');
    const storage = multer.diskStorage({
        destination(req, file, cb) {
            cb(null, path.join(__dirname, `/../upload/${options.dirname}`))
        },
        filename(req, file, cb) {
            let fileArr = file.originalname.split('.');
            cb(null, fileArr[0] + '-' + Date.now() + `.${fileArr[fileArr.length - 1]}`)
        }
    });
    return multer({storage});
}