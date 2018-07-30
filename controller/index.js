const {Router} = require ("express");
const router = Router();

const register = require('./register');
const login = require('./login');
const swiper = require('./swiper');
router.use(register);
router.use(login);
router.use(swiper);

module.exports = router;