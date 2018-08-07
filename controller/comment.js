const {Router} = require ("express");
const router = Router();
const comments = require('../database/model/comment');
const article = require('../database/model/article');
// 添加评论
router.post('/addComment',(req,res) => {
    let {username,comment,recId,sendId} = req.body;
    console.log(req.session.user);
    comments.create({comment,username,sendId,recId}).then(data => {
        article.update({_id: recId}, {$push : {commentsId: data._id}}).then(data => {})
        res.json({
            code: 200,
            msg: "发表评论成功"
        })
    }).catch(err => {
        res.json({
            code: 401,
            msg: "评论失败"
        })
    })
});
// 得到某篇笔记的评论
router.post('/getComment/:id',(req,res) => {
    let {id} = req.params;
    comments.find({recId: id}).then(data => {
        res.json({
            code: 200,
            data,
            msg: 'success'
        })
    })
});

module.exports = router;
