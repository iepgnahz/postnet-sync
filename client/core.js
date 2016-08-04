/**
 * Created by zhangpei on 16/8/2.
 */
"use strict";
const repl = require('repl');
const RouterSwitcher = require("./RouterSwitcher");
const BarcodeAction = require("./actions/BarcodeAction");
const PostcodeAction = require("./actions/PostcodeAction");
const InitAction = require("./actions/InitAction");

let routers = [
  new InitAction(),
  new PostcodeAction(),
  new BarcodeAction()
];

let routerSwitcher = new RouterSwitcher(routers);

function handleCmd(cmd, context, filename, output) {
  routerSwitcher.switchRouter(cmd.trim(), output);
}

console.log(routerSwitcher.start());
repl.start({ prompt: '-> ', eval: handleCmd});
