const {Router} = require ("express");
const router = Router();
const swiper = require('../database/model/swiper');

router.post('/swiper',(req,res) => {
    let {img,title} = req.body;
    swiper.create({img,title}).then(data => {
        res.json({
            code: 200,
            msg: 'success'
        })
    }).catch(err => {
        res.json({
            code: 401,
            msg: '添加失败'
        })
    })
});

router.get('/getswiper',(req,res) => {
    swiper.find().then(data => {
        res.json({
            code: 200,
            data,
            msg: 'success'
        })
    }).catch(err => {
        res.json({
            code: 401,
            msg: '获取失败'
        })
    })
});

module.exports = router;