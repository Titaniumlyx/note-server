const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    username: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    avatar: {
        type: String,
        // default: '/images/green.jpg'
        default: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2155101066,3587412309&fm=27&gp=0.jpg'
    }
},{versionKey: false});

module.exports = mongoose.model("user",user);
// 导出这个模型