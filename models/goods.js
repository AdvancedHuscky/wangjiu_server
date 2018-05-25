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
module.exports = mongoose.model('good',productSchema);