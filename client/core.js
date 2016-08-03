/**
 * Created by zhangpei on 16/8/2.
 */
"use strict";
var request = require('superagent');
const repl = require('repl');
var RouterSwitcher = require("./RouterSwitcher");

class BarcodeAction {
  constructor() {
    this.name = "barcode";
    this.help = "请输入条形码或者q退出:";
  }

  doAction(cmd) {
    if (cmd === "q") {
      return "init";
    } else {
      // let postcode = changeBarcode(cmd);
      // if (postcode === "您输入的条形码中有不存在的码型" || barcode === "您输入条形码的校验值和真实校验值不符" || barcode === "您输入的条形码不合法") {
      //   return "barcode";
      // } else {
      //   return "init";
      // }
      return changePostcodeAction(cmd.trim())

    }
  }
}


class PostcodeAction {
  constructor() {
    this.name = "postcode";
    this.help = "请输入邮编(q返回上一层):";
  }

  doAction(cmd,transform,output) {
    if (cmd === "q") {
      return "init";
    } else {
     let current = "init";
      changePostcodeAction(cmd,transform,current,output);
    }
  }
}

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


let routers = [
  new InitAction(),
  new PostcodeAction(),
  new BarcodeAction()
];

let routerSwitcher = new RouterSwitcher(routers);



function start(repl) {
  console.log(routerSwitcher.start());
  repl.start({
    prompt: '> ', eval: function(cmd, context, filename, output) {
      // if ((routerSwitcher.currentStatus === "postcode" || routerSwitcher.currentStatus === "barcode" ) && cmd.trim() !== "q") {
      //   changeCode(cmd, output, routerSwitcher.currentStatus);
      // } else {
      //   let newStatus = routerSwitcher.switchRouter(cmd.trim());
      //   output(newStatus.help);
      // }

      routerSwitcher.switchRouter(cmd.trim(), output);
    }
  });
}


function changePostcode(cmd) {
  var changedCode = "";
  request
  // .post("http://192.168.1.170:3000/zipcode")
    .post(`http://127.0.0.1:5000/postcode`)
    .type("form")
    .send({code: cmd.trim()})
    .end(function (err, res) {
      changedCode = res.text;
      console.log(res.text);
      // let newStatus = routerSwitcher.switchRouter(cmd.trim());
      // output(newStatus.help);
    });
  return changedCode
}

function changeBarcode(cmd) {
  var changedCode = "";
  request
  // .post("http://192.168.1.170:3000/zipcode")
    .post(`http://127.0.0.1:5000/barcode`)
    .type("form")
    .send({code: cmd.trim()})
    .end(function (err, res) {
      changedCode = res.text;
      console.log(res.text);
      // let newStatus = routerSwitcher.switchRouter(cmd.trim());
      // output(newStatus.help);
    });
  return changedCode
}
start(repl);

function changePostcodeAction(cmd,transform,current,output) {
  var changedCode = "";
  var status = "";
  request
  // .post("http://192.168.1.170:3000/zipcode")
    .post(`http://127.0.0.1:5000/postcode`)
    .type("form")
    .send({code: cmd.trim()})
    .end(function (err, res) {
      changedCode = res.text;
      console.log(res.text);
      // status = (changedCode === "您输入的邮编不合法,应是5,9或者10数字0-9字符,并且若有-,其应在第六位处,请重新输入") ? "postcode" : "barcode"
      // // let newStatus = routerSwitcher.switchRouter(cmd.trim());
      // // output(newStatus.help);
      // status =
      transform(current,output);

    });
  return status

}