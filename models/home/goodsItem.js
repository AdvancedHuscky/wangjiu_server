let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let goodsItemSchema = new Schema({
    "pid":Number,
    "sale_price":Number,
    "img_src":String,
    "product_name":String,
})
module.exports = mongoose.model('goodsItem',goodsItemSchema,'goodsItem')