/**
 * Created by zhangpei on 16/8/2.
 */

"use strict";
const express = require("express");
const bodyParser = require('body-parser');
const ChangedPostcode = require("./ChangedPostcode");
const ChangedBarcode = require("./ChangedBarcode");
var app = express();
var changedPostcode = new ChangedPostcode();
var changedBarcode = new ChangedBarcode();
app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.raw);
app.use(express.static("./public"));

app.get('/init', (req, res) => {
  res.sendfile('./')
});

app.post("/postcode",function(req,res){
  res.send(changedPostcode.changePostCode(req.body.code))

});

app.post("/barcode",function(req,res){
  console.log(req.body.code);
  res.send(changedBarcode.changeBarcode(req.body.code))
});

app.listen(5000,function(){
  console.log("listen on 5000");
});