/**
 * Created by zhangpei on 16/8/2.
 */

"use strict";
const express = require("express");
const bodyParser = require('body-parser');
const mongodb = require('../dataBase/database');
const ChangedPostcode = require("./ChangedPostcode");
const ChangedBarcode = require("./ChangedBarcode");
var cors = require("cors");

var app = express();
app.use(cors());

var changedPostcode = new ChangedPostcode();
var changedBarcode = new ChangedBarcode();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("./public"));

app.post("/postcode",function(req,res){
  let answer = changedPostcode.changePostCode(req.body.code);
  if(answer.err) {
    res.send(answer.err);
  } else {
    res.send(answer.barcode);
    mongodb.insertRecord({code:req.body.code,result:answer.barcode})
  }
});

app.post("/barcode",function(req,res){
  let answer = changedBarcode.changeBarcode(req.body.code);
  if(answer.err) {
    res.send(answer.err);
  } else {
    res.send(answer.postcode);
    mongodb.insertRecord({code:req.body.code,result:answer.postcode})
  }
});



app.get("/records",function(req, res){
  mongodb.searchRecords((allItems) => {
    allItems.reverse();
    allItems.length = allItems.length <= 10 ? allItems.length : 10
    res.send(allItems)
  });//服务器接口
});

app.listen(5000,function(){
  console.log("listen on 5000");
});

module.exports = app;
