const {Router} = require ("express");
const router = Router();
const user = require('../database/user');

router.post('/entry',(req, res) => {
    let {email,password} = req.body;

    user.findOne({email}).then(data => {
        console.log(data);
        if(data){
            if(password == data.password){
                req.session.user = data; // 把数据存到session里面 (不能加id，因为session本身有id)

                let userMsg = {};
                userMsg.username = data.username;
                userMsg.email = data.email;  //只给前端需要的信息，不能全给，不能给密码
                userMsg.avatar = data.avatar;
                res.json({
                    code: 200,
                    data: userMsg,
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

router.delete('/logout',(req,res) => {
    req.session.destroy(function (err) {
        if(err){
            console.log(err);
        }else{
            res.clearCookie('sid');
            res.json({
                code: 200,
                msg: '退出登录成功'
            })
        }
    })
});

router.post('/judge',(req,res) => {
    if(req.session.user){
        res.json({
            code: 200
        })
    }else{
        res.json({
            code: 400,
            msg: '请先登录...'
        })
    }
});

module.exports = router;