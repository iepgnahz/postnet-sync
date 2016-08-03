"use strict";

class InitAction {
  constructor() {
    this.name = 'init';
    this.help = '请选择功能:1.邮编转编码 2.编码转邮编 q.退出';
  }

  doAction(cmd) {
    switch (cmd) {
      case "1":
        return "postcode";
        break;
      case "2":
        return "barcode";
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