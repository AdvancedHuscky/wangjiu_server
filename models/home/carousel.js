let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let productSchema = new Schema({
    "ad_source_url":String,
    "ad_source_imgpath":String
})
module.exports = mongoose.model('carousel',productSchema,'carousel')