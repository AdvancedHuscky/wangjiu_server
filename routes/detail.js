//for classify page goods api
let express = require('express')
let router = express.Router();
let mongoose = require('./mongoose');
let Detail = require('../models/detail');

router.get('/',(req,res,next)=>{
    console.log(req.query.id);
    let pid = req.query.id;
    // let pid = parseInt(req.query.id);
    console.log(pid);
    Detail.find({pid},(err,doc)=>{
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