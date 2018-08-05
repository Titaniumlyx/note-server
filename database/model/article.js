const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const article = new Schema({
    author: String,
    title: {
        type: String,
        index: 1
    },
    // id: String,
    content: String,
    contentText: String,
    userPic: String,
    authorMsg: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
},{versionKey: false, timestamps: {createdAt: "createTime", updatedAt: "updateTime"}});
   // timestamps 为时间戳
module.exports = mongoose.model("article",article);
// 导出这个模型
