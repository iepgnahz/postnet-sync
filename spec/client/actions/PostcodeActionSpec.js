/**
 * Created by zhangpei on 16/8/3.
 */
import PostcodeAction from "../../../client/actions/PostcodeAction";

describe("doPostcodeAction", function () {
  let action;
  beforeEach(() => {
    spyOn(console, "log");
    action = new PostcodeAction();
  });

  it("should return a string", function () {
    let currentAction = "postcode";
    let cmd = "asd";
    let result = action.doAction(cmd);
    let expectResult = "postcode";
    expect(result).toEqual(expectResult);
  });

  it("should return a string", function () {
    let currentAction = "postcode";
    let cmd = "12345";
    let result = action.doAction(cmd);
    let expectResult = "init";
    expect(result).toEqual(expectResult);
  });

  it("should return a string", function () {
    let currentAction = "postcode";
    let cmd = "q";
    let result = action.doAction(cmd);
    let expectResult = "init";
    expect(result).toEqual(expectResult);
  })
});