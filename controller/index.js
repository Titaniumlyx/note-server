const {Router} = require ("express");
const router = Router();

const register = require('./register');
const login = require('./login');
const swiper = require('./swiper');
const article = require('./article');
router.use(register);
router.use(login);
router.use(swiper);
router.use(article);

module.exports = router;