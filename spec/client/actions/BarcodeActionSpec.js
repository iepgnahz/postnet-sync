
import BarcodeAction from "../../../client/actions/BarcodeAction";

describe("doBarcodeAction", function () {
  let action;
  beforeEach(() => {
    spyOn(console, "log");
    action = new BarcodeAction();
  });

  it("should return a string", function () {
    let currentAction = "barcode";
    let cmd = "| :::";
    let result = action.doAction(cmd);
    let expectResult = "barcode";
    expect(result).toEqual(expectResult);
  });

  it("should return a string", function () {
    let currentAction = "barcode";
    let cmd = "| |:|:: :|:|: |:::| :::|| ::||: :|:|: |";
    let result = action.doAction(cmd);
    let expectResult = "init";
    expect(result).toEqual(expectResult);
  });

  it("should return a string", function () {
    let currentAction = "barcode";
    let cmd = "q";
    let result = action.doAction(cmd);
    let expectResult = "init";
    expect(result).toEqual(expectResult);
  })
});

/**
 * Created by zhangpei on 16/8/3.
 */
