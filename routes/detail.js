//for classify page goods api
let express = require('express')
let router = express.Router();
let mongoose = require('./mongoose');
let Goods = require('../models/goods');

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