let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

const carousel = require('../models/home/carousel.js');
const iconList = require('../models/home/iconList.js');
const flashSalesList = require('../models/home/flashSalesList');
const grandCruList = require('../models/home/grandCruList');
const specialsList = require('../models/home/specialsList');
const goodsItem = require('../models/home/goodsItem')

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
router.get('/grandCruList',(req,res,next)=>{
    grandCruList.find({},(err,doc)=>{
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
router.get('/specials',(req,res,next)=>{
    specialsList.find({},(err,doc)=>{
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
router.get('/goodsItem',(req,res,next)=>{
    let page = parseInt(req.param("page"));
    let pageSize = 8;
    let skip = (page-1)*pageSize;
    let params = {};
    let goodsModel = goodsItem.find(params).skip(skip).limit(pageSize);
    goodsModel.exec((err,doc)=>{
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
    // goodsItem.find({},(err,doc)=>{
    //     if(err){
    //         res.json({
    //             status: '1',
    //             msg: err.message
    //         })
    //     }else{
    //         res.json({
    //             status:'0',
    //             result:{
    //                 count:doc.length,
    //                 data:doc
    //             }
    //         })
    //     }
    // })
})
module.exports = router;