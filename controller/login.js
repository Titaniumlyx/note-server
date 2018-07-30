const {Router} = require ("express");
const router = Router();
const user = require('../database/user');

router.post('/entry',(req, res) => {
    let {username, email,password} = req.body;

    user.findOne({email}).then(data => {
        console.log(data);
        if(data){
            if(password == data.password){
                req.session.user = data; // 把数据存到session里面 (不能加id，因为session本身有id)
                res.json({
                    code: 200,
                    data,
                    msg: '登陆成功'
                })
            }else{
                res.json({
                    code: 200,
                    msg: '密码输入错误'
                })
            }
        }else{
            res.json({
                code: 401,
                msg: '用户名不存在'
            })
        }
    })
});

module.exports = router;