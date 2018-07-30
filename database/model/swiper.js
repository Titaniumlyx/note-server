const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const swiper = new Schema({
    img: String,
    title: String
},{versionKey: false});

module.exports = mongoose.model("swiper",swiper);
// 导出这个模型
