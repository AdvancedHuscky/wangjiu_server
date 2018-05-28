let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

const carousel = require('../models/home/carousel.js');
const iconList = require('../models/home/iconList.js');
const flashSalesList = require('../models/home/flashSalesList')

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
router.get('/carousel',(req,res,next)=>{
    carousel.find({},(err,doc)=>{
        if(err){
            res.json({
                status:'1',
                msg:err.message
            })
        }else(
            res.json({
                status:'0',
                result:{
                    count:doc.length,
                    data:doc
                }
            })
        )
    })
})
router.get('/iconList',(req,res,next)=>{
    iconList.find({},(err,doc)=>{
        if(err){
            res.json({
                status: '1',
                msg: err.message
            })
        }else{
            res.json({
                status:'0',
                result:{
                    count:doc.length,
                    data:doc
                }
            })
        }
    })
})
router.get('/flashSalesList',(req,res,next)=>{
    flashSalesList.find({},(err,doc)=>{
        if(err){
            res.json({
                status: '1',
                msg: err.message
            })
        }else{
            res.json({
                status:'0',
                result:{
                    count:doc.length,
                    data:doc
                }
            })
        }
    })
})
module.exports = router;