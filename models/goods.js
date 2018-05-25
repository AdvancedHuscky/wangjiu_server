let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let productSchema = new Schema({
    "action_url" : String,
    "category_name" : String,
    "child_categories" : [{
        "category_name" : String,
        "child_categories" :[{
            "category_name" : String,
            "image_url":String,
            "tag_key":String
        }]
    }],
    "image_url":String
});
//if this name is good,it will link to goods automatically,so the third argument could be ignored
module.exports = mongoose.model('good',productSchema,'goods');