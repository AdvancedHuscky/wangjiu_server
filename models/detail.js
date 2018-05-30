let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let detailSchema = new Schema();
module.exports = mongoose.model('detail',detailSchema,'productDetail');