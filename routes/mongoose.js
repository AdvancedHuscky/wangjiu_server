let mongoose = require('mongoose');

//connect to mongodb database
mongoose.connect('mongodb://127.0.0.1:27017/wangjiu');
mongoose.connection.on('connected',()=>{
    console.log('mongodb connected success')
})
mongoose.connection.on('error',()=>{
    console.log('some error occured')
})
mongoose.connection.on('disconnected',()=>{
    console.log('mongodb connected disconnected')
})

module.exports = mongoose;