let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let flashSalesListSchema = new Schema({
    "ad_source_url":String,
    "ad_source_imgpath":String,
    "ad_source_title":String
})
module.exports = mongoose.model('flashSalesList',flashSalesListSchema,'flashSales')