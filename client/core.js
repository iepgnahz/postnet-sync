/**
 * Created by zhangpei on 16/8/2.
 */
"use strict";
var request = require('superagent');
const repl = require('repl');
var RouterSwitcher = require("./RouterSwitcher");
var BarcodeAction = require("./actions/BarcodeAction");
var PostcodeAction = require("./actions/PostcodeAction");
var InitAction = require("./actions/InitAction");

let routers = [
  new InitAction(),
  new PostcodeAction(),
  new BarcodeAction()
];

let routerSwitcher = new RouterSwitcher(routers);

function start(repl) {
  console.log(routerSwitcher.start());
  repl.start({
    prompt: '> ', eval: function (cmd, context, filename, output) {
      routerSwitcher.switchRouter(cmd.trim(), output);
    }
  });
}

start(repl);
