const {Router} = require ("express");
const router = Router();
const article = require('../database/model/article');
// 增加文章
router.post('/article', (req,res) => {
    if(req.session.user){
        // console.log(req.session.user);
        let {title,content,contentText,author,userPic,classify} = req.body;
        let authorMsg = req.session.user._id;
        let browse = 0;

        article.create({author,title,content,contentText,authorMsg,userPic,browse,classify}).then(data => {
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
// 得到文章列表
router.get('/getArticle',(req,res) => {
    article.find()
        .populate({path: 'commentsId'})
        .sort({_id: -1})
        .then(data => {
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
// 进入文章详情    5b670cb51c109a15f00ede27
router.post('/getArticle/:id', (req,res) => {
    let {id} = req.params;
    article.findOne({_id: id}).then(data => {
        // console.log(data);
        let browse = data.browse+1;
        article.update({_id: id},{$set: {browse}}).then(data => {})
        res.json({
            code: 200,
            data,
            msg: 'success'
        })
    })
});
// 模糊搜索
router.get('/articleSearch', (req,res) => {
   let {title, pn=1, size=10} = req.query;
   let query = {};
   if(title){
       let reg = new RegExp(title);  //reg 便是 title 即要搜索的对象
       // 用‘正则表达式’来查找搜索
       query = {
           $or : [
               {title: reg},
               {content: reg}
           ]
       }
   }
   article.find(query)
       .sort({_id: -1}) //倒序排列
       .skip(size*(pn-1)) //跳过多少页
       .limit(size)  //限制多少页
       .then(data => {
       res.json({
           code: 200,
           data,
           msg: 'success'
       })
   })
});

module.exports = router;
