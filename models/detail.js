let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let detailSchema = new Schema(
//     {
//     "pid" : String,
//     "list" : [{
//         "pid" : String
//     }],
//     "comments":Object
// }
);
module.exports = mongoose.model('detail',detailSchema,'productDetail');