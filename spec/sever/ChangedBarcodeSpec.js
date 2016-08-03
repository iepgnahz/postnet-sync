/**
 * Created by zhangpei on 16/8/3.
 */
/**
 * Created by zhangpei on 16/7/29.
 */
import ChangedBarcode from "../../sever/ChangedBarcode";

describe("changeBarcode", function () {
  let changedBarcode;

  beforeEach(function(){
    changedBarcode = new ChangedBarcode();
  // spyOn(console,"log");
});

  it("should return a postcode", function () {
    let code = "| :*";
    let result = changedBarcode.changeBarcode(code);
    let expectResult = "您输入的条形码不合法";
    expect(result).toEqual(expectResult);
  }); //当有除去|: 以外的字符输入

  it("should return a postcode", function () {
    let code = "||| ||| ||";
    let result = changedBarcode.changeBarcode(code);
    let expectResult = "您输入的条形码不合法";
    expect(result).toEqual(expectResult);
  }); //当有不以| 开始和| 结束的字符

  it("should return a postcode", function () {
    let code = "| :::|| ||::: |";
    let result = changedBarcode.changeBarcode(code);
    let expectResult = "您输入条形码的校验值和真实校验值不符";
    expect(result).toEqual(expectResult);
  });  //当有barcode的校验值和计算不同的字符

  it("should return a postcode", function () {
    let code = "| ::||| ||::: |";
    let result = changedBarcode.changeBarcode(code);
    let expectResult = "您输入的条形码中有不存在的码型";
    expect(result).toEqual(expectResult);
  });  //当用户输入了除去0-9以外的barcode形式

  it("should return a postcode", function () {
    let code = "| |:|:: :|:|: |:::| :::|| ::||: :|:|: |";
    let result = changedBarcode.changeBarcode(code);
    let expectResult = "95713";
    expect(result).toEqual(expectResult);
  });  //当用户输入5位正确

  it("should return a postcode", function () {
    let code = "| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||::: |";
    let result = changedBarcode.changeBarcode(code);
    let expectResult = "45056-1234";
    expect(result).toEqual(expectResult);
  });

});