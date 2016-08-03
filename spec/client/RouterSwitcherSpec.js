/**
 * Created by zhangpei on 16/8/3.
 */

import RouterSwitcher from "../../client/RouterSwitcher";
import InitAction from '../../client/actions/InitAction';
import PostcodeAction from '../../client/actions/PostcodeAction';
import BarcodeAction from '../../client/actions/BarcodeAction';


describe("switchRouter", function () {
  let routerSwitcher;
  let routers;
  beforeEach(function(){
    routers = [
    new InitAction(),
    new PostcodeAction(),
    new BarcodeAction()
  ];
  routerSwitcher = new RouterSwitcher(routers);
  spyOn(console, "log");
});

  it("should return a string", function () {
    let cmd = "1";
    let result = routerSwitcher.switchRouter(cmd);
    let expectResult = routerSwitcher.routers.find(function(item) {
        return item.name === "postcode";
  });
    expect(result).toEqual(expectResult);
  });

});

describe("start", function () {
  let routerSwitcher;
  let routers;
  beforeEach(function(){
    routers = [
    new InitAction(),
    new PostcodeAction(),
    new BarcodeAction()
  ];
  routerSwitcher = new RouterSwitcher(routers);
  spyOn(console, "log");
});

  it("should return a string", function () {
    let cmd = "1";
    let result = routerSwitcher.start();
    let expectResult = "请选择功能:1.邮编转编码 2.编码转邮编 q.退出";
    expect(result).toEqual(expectResult);
  });
});