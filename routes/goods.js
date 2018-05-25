//for classify page goods api
let express = require('express')
let router = express.Router();
let mongoose = require('mongoose');
let Goods = require('../models/goods');

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
router.get('/',(req,res,next)=>{
    Goods.find({},(err,doc)=>{
        if(err){
            res.json({
                status:'1',
                msg:err.message
            })
        }else{
            res.json({
                status:'0',
                msg:'',
                result:{
                    count:doc.length,
                    list:doc
                }
            })
        }
    })
})
module.exports = router;