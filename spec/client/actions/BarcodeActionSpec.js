
import BarcodeAction from "../../../client/actions/BarcodeAction";
var request = require("supertest");
request = request(`http://127.0.0.1:5000/barcode`);

describe("doBarcodeAction", function () {
  let action;
  beforeEach(() => {
    spyOn(console, "log");
    action = new BarcodeAction();
  });

  xit("should return a string", function () {
    let currentAction = "barcode";
    let cmd = "| :::";
    let result = action.doAction(cmd);
    let expectResult = "barcode";
    expect(result).toEqual(expectResult);
  });

  xit("should return a string", function () {
    let currentAction = "barcode";
    let cmd = "| |:|:: :|:|: |:::| :::|| ::||: :|:|: |";
    let result = action.doAction(cmd);
    let expectResult = "init";
    expect(result).toEqual(expectResult);
  });

  xit("should return a string", function () {
    let currentAction = "barcode";
    let cmd = "q";
    let result = action.doAction(cmd);
    let expectResult = "init";
    expect(result).toEqual(expectResult);
  })
});

describe("/barcode",()=>{
  it("respond with postcode",(done)=>{
    request
      .post("/barcode")
      .type("form")
      .send({code: "| :::|| ::|:| ::||: :|::| :|:|: :|:|:"})
      .expect(202, "12345")
      .end((err,res)=>{
        if(err) done.fail(err);
        // done();????????????????
      })
  });

  it("respond with err",()=>{
    request
      .post("/barcode")
      .send({code:"| |||"})
      .type("form")
      .expect(200,"您输入的条形码不合法")
      .end((err,res)=>{

        console.log(err);
        err ? console.log("F") : console.log("T")
      });
  })
});

/**
 * Created by zhangpei on 16/8/3.
 */
