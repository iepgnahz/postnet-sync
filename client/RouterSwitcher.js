/**
 * Created by zhangpei on 16/7/29.
 */
"use strict";
class RouterSwitcher {
  constructor(routers) {
    this.currentStatus = "init";
    this.routers = routers;
  }

  switchRouter(cmd, output) {
    let router = this.routers.find(item =>item.name === this.currentStatus);
    let result = router.doAction(cmd, (result, output)=> this.setNewActionAndPrintPrompt(result, output), output);
  }

  start() {
    console.log("欢迎光临!");

    return this.routers.find(item =>item.name === this.currentStatus).help;
  }

  setNewActionAndPrintPrompt(result, output) {
    let newStatus = this.routers.find(item => item.name === result);
    this.currentStatus = newStatus.name;
    output(newStatus.help)
  }
}

module.exports = RouterSwitcher;
