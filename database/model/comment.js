const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comment = new Schema({
    comment: String,
    username: String,
    sendId: String,
    recId: String
}, {timestamps: {createdAt: "createTime", updatedAt: "updateTime"}});
// timestamps 为时间戳
module.exports = mongoose.model("comment", comment);
// 导出这个模型
