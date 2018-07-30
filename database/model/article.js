const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const article = new Schema({
    author: String,
    title: {
        type: String,
        index: 1
    },
    content: String,
    contentText: String,
    authorMsgId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
},{versionKey: false, timestamps: {createAt: "createTime", updateAt: "updateTime"}});

module.exports = mongoose.model("article",article);
// 导出这个模型
