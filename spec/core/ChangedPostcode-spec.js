
/**
 * Created by zhangpei on 16/8/3.
 */
/**
 * Created by zhangpei on 16/7/29.
 */
import ChangedPostcode from "../../core/ChangedPostcode";

describe("changePostCode", function () {
  let changedPostCode;

  beforeEach(function () {
    changedPostCode = new ChangedPostcode();
    // spyOn("console",log);
  });

  it("should return barcode", function () {
    let code = "45056-1234";
    let result = changedPostCode.changePostCode(code);
    let expectResult = "| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||::: |";
    expect(result).toEqual(expectResult);
  }); //正确10位

  it("should return barcode", function () {
    let code = "450-561234";
    let result = changedPostCode.changePostCode(code);
    let expectResult = "您输入的邮编不合法,应是5,9或者10数字0-9字符,并且若有-,其应在第六位处";
    expect(result).toEqual(expectResult);
  }); //-位置不对

  it("should return barcode", function () {
    let code = "450";
    let result = changedPostCode.changePostCode(code);
    let expectResult = "您输入的邮编不合法,应是5,9或者10数字0-9字符,并且若有-,其应在第六位处";
    expect(result).toEqual(expectResult);
  }); //位数不合法

  it("should return barcode", function () {
    let code = "45*";
    let result = changedPostCode.changePostCode(code);
    let expectResult = "您输入的邮编不合法,应是5,9或者10数字0-9字符,并且若有-,其应在第六位处";
    expect(result).toEqual(expectResult);
  }); //非法字符

  it("should return barcode", function () {
    let code = "450561234";
    let result = changedPostCode.changePostCode(code);
    let expectResult = "| :|::| :|:|: ||::: :|:|: :||:: :::|| ::|:| ::||: :|::| ||::: |";
    expect(result).toEqual(expectResult);
  }); //正确9位

  it("should return barcode", function () {
    let code = "45056";
    let result = changedPostCode.changePostCode(code);
    let expectResult = "| :|::| :|:|: ||::: :|:|: :||:: ||::: |";
    expect(result).toEqual(expectResult);
  }); //正确5位
});