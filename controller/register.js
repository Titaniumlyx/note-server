const {Router} = require ("express");
const router = Router();
const user = require('../database/user');
const isEmail = require('validator/lib/isEmail'); // 一种很牛的关于验证的插件，可以验证很多东西

router.post('/user',(req,res) => {
    let {username, email, password} = req.body;

    if(isEmail(email)&&password&&password.trim()!= ''){
        user.create({username,password,email}).then(data => {
            res.json({
                code: 200,
                msg: "success"
            })
        }).catch(err => {
            // console.log(err);
            res.json({
                code: 401,
                msg: "该邮箱已注册"
            })
        })
    }else{
        res.json({
            code: 401,
            msg: "注册信息错误，请重新输入"
        })
    }
});

module.exports = router;