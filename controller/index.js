const {Router} = require ("express");
const router = Router();

const register = require('./register');
const login = require('./login');
const swiper = require('./swiper');
const article = require('./article');
const upload = require('./upload');
const comment = require('./comment');
// 与下边的use要按 顺序 来，  需顺序一致

const path = require('path');

router.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../pages/index.html'));
});  //前端打包后，需进行的修改

router.use(register);
router.use(login)  ;
router.use(swiper);
router.use(article);
router.use(upload);
router.use(comment);

module.exports = router;