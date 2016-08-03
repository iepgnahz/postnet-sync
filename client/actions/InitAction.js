"use strict";

class InitAction {
  constructor() {
    this.name = 'init';
    this.help = '请选择功能:1.邮编转编码 2.编码转邮编 q.退出';
  }

  doAction(cmd,transform,output) {
    let current = "";
    switch (cmd) {
      case "1":
        current =  "postcode";
        transform(current,output);
        break;
      case "2":
        current = "barcode";
        transform(current,output);
        break;
      case "q":
        console.log("GoodBye");
        process.exit();
        break;
      default:
        console.log("输入无效请重新输入");
        return "init";
    }
  }
}


module.exports = InitAction;