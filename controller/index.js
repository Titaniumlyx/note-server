const {Router} = require ("express");
const router = Router();

const register = require('./register');
const login = require('./login');
const swiper = require('./swiper');
const article = require('./article');

const path = require('path');

router.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../pages/index.html'));
});

router.use(register);
router.use(login);
router.use(swiper);
router.use(article);

module.exports = router;