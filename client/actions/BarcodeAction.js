"use strict";
var request = require('superagent');

class BarcodeAction {
  constructor() {
    this.name = "barcode";
    this.help = "请输入条形码或者q退出:";
  }

  doAction(cmd, transform, output) {
    if (cmd === "q") {
      let current =  "init";
      transform(current, output);
    } else {
      let current = "init";
      changeBarcodeAction(cmd, transform, current, output)
    }
  }
}

function changeBarcodeAction(cmd,transform,current,output) {
  var changedCode = "";
  request
    .post(`http://127.0.0.1:5000/barcode`)
    .type("form")
    .send({code: cmd.trim()})
    .end(function (err, res) {
      changedCode = res.text;
      console.log(res.text);
      transform(current,output);
    });
}

module.exports = BarcodeAction;