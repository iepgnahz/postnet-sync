/**
 * Created by zhangpei on 16/8/2.
 */

"use strict";
const express = require("express");
const bodyParser = require('body-parser');
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
  answer.err ? res.send(answer.err) : res.send(answer.barcode)

});

app.post("/barcode",function(req,res){
  let answer = changedBarcode.changeBarcode(req.body.code);
  answer.err ? res.send(answer.err) : res.send(answer.postcode)

});



// app.post("/records",function(req,res){
//   if(!req.body){
//     res.send({codeItems:null,err:"您的请求不合法"})
//   } else {
//     res.send({codeItmes:getRecords()}); //服务器接口
//   }
// });

app.listen(5000,function(){
  console.log("listen on 5000");
});

module.exports = app;
