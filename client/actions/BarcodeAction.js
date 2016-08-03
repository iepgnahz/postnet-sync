"use strict";


const ChangedBarcode = require('../../sever/ChangedBarcode');

class BarcodeAction {
  constructor() {
    this.name = "barcode";
    this.help = "请输入条形码或者q退出:";
  }

  doAction(cmd) {
    let changedBarcode = new ChangedBarcode();
    if (cmd === "q") {
      return "init";
    } else {
      // console.log("开始转换,请等待。。。。");
      let barcode = changedBarcode.changeBarcode(cmd);
      if (barcode === "您输入的条形码中有不存在的码型" || barcode === "您输入条形码的校验值和真实校验值不符" || barcode === "您输入的条形码不合法") {
        // console.log(barcode + ",请重新新输入");
        return "barcode";
      } else {
        // console.log("转换结果:" + barcode);
        return "init";
      }
    }
  }
}

module.exports = BarcodeAction;