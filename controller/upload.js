const {Router} = require("express");
const router = Router();
const user = require('../database/user');

const multer = require('multer');  //Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency.
const mime = require('mime');  //有关于文件的后缀名 的一个插件
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../uploadPic/images'))  //上传的文件存储的地方
    },
    filename: function (req, file, cb) {
        // console.log(file);
        let extname = mime.getExtension(file.mimetype);  //文件的后缀名/拓展名
        cb(null, file.fieldname + '-' + Date.now() + '.' + extname)
    }
})
const upload = multer({storage: storage})

// const upload = multer({
//     dest: 'uploadPic/images',   //上传的文件存储的地方，一个文件夹
//     limits: {
//         fileSize: 1024*1024*1   //上传文件的大小限制，1024*1024*1代表1M
//     }
// });

router.post('/uploadPic', upload.single('avatar'), (req, res) => {
    let filePath = `/images/${req.file.filename}`;
    res.json({
        code: 200,
        data: filePath
    })
});

router.post('/update', (req, res) => {
    // console.log(req.body.avatar);
    let {avatar, email} = req.body;
    user.findOneAndUpdate({email: email}, {$set: {avatar}}).then(data => {
        // console.log(req.body.avatar);
        console.log(data);
        res.json({
            code: 200,
            data,
            msg: '修改成功'
        })
    })
});

module.exports = router;