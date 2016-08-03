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

  doAction(cmd,transform,output) {
    if (cmd === "q") {
      let current =  "init";
      transform(current,output);
    } else {
      let current = "init";
      changeBarcodeAction(cmd,transform,current,output)

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
      let current =  "init";
      transform(current,output);
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
      routerSwitcher.switchRouter(cmd.trim(), output);
    }
  });
}


start(repl);

function changePostcodeAction(cmd,transform,current,output) {
  var changedCode = "";
  request
    .post(`http://127.0.0.1:5000/postcode`)
    .type("form")
    .send({code: cmd.trim()})
    .end(function (err, res) {
      changedCode = res.text;
      console.log(res.text);
      transform(current,output);
    });
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