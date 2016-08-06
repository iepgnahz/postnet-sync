"use strict";


class BarcodeAction {
  constructor() {
    this.name = "barcode";
    this.help = "请输入条形码或者q退出:";
  }

  doAction(cmd,setNewActionAndPrintPrompt,output) {
    if (cmd === "q") {
      let current =  "init";
      setNewActionAndPrintPrompt(current,output);
    } else {
      let current = "init";
      changeBarcodeAction(cmd,setNewActionAndPrintPrompt,current,output)
    }
  }
}

function changeBarcodeAction(cmd,callback,current,output) {
  var changedCode = "";
  request
    .post(`http://127.0.0.1:5000/barcode`)
    .type("form")
    .send({code: cmd.trim()})
    .end(function (err, res) {
      changedCode = res.text;
      console.log(res.text);
      callback(current,output);
    });
}

module.exports = BarcodeAction;
