const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    username: String,
    email: {
        type: String,
        unique: true
    },
    password: String
},{versionKey: false});

module.exports = mongoose.model("user",user);
// 导出这个模型