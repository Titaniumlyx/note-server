const {Router} = require ("express");
const router = Router();
const user = require('../database/user');

router.post('/user',(req,res) => {
    let {username, email, password} = req.body;
    console.log(username, email, password);
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
});

module.exports = router;