const {Router} = require ("express");
const router = Router();
const article = require('../database/model/article');

router.post('/article', (req,res) => {
    if(req.session.user){
        console.log(req.session.user);
        let {title,content,contentText} = req.body;
        let author = req.session.user.username;
        let authorMsgId = req.session.user._id;

        article.create({author,title,content,contentText,authorMsgId}).then(data => {
            res.json({
                code: 200,
                msg: "文章发布成功"
            })
        }).catch(err => {
            res.json({
                code: 401,
                msg: '发布失败'
            })
        })
    }else{
        res.json({
            code: 403,
            msg: "未登录，不能发布笔记！！"
        })
    }
});

router.get('/getArticle',(req,res) => {
    article.find().then(data => {
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

router.post('/getArticle/:id', (req,res) => {
    let {id} = req.params;
    article.findOne({_id: id}).then(data => {
        res.json({
            code: 200,
            data,
            msg: 'success'
        })
    })
});

module.exports = router;
