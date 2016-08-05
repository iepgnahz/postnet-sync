
import BarcodeAction from "../../../client/actions/BarcodeAction";
var superTest = require("supertest");
var app = require("../../../sever/shell");
var request = superTest(app);

// describe("doBarcodeAction", function () {
//   let action;
//   beforeEach(() => {
//     spyOn(console, "log");
//     action = new BarcodeAction();
//   });
//
//   xit("should return a string", function () {
//     let currentAction = "barcode";
//     let cmd = "| :::";
//     let result = action.doAction(cmd);
//     let expectResult = "barcode";
//     expect(result).toEqual(expectResult);
//   });
//
//   xit("should return a string", function () {
//     let currentAction = "barcode";
//     let cmd = "| |:|:: :|:|: |:::| :::|| ::||: :|:|: |";
//     let result = action.doAction(cmd);
//     let expectResult = "init";
//     expect(result).toEqual(expectResult);
//   });
//
//   xit("should return a string", function () {
//     let currentAction = "barcode";
//     let cmd = "q";
//     let result = action.doAction(cmd);
//     let expectResult = "init";
//     expect(result).toEqual(expectResult);
//   })
// });
//
// describe('BarcodeAction', ()=> {
//   describe('BarcodeAction', ()=> {
//     it('should jump back to init action', ()=> {
//       let transform = jasmine.createSpy('spy');
//       let output = jasmine.createSpy('spy');
//       let action = new BarcodeAction();
//       action.doAction('q', transform, output);
//       expect(transform).toHaveBeenCalledWith('init', output);
//     })
//   })
// });

describe('BarcodeAction', ()=> {
  it('should jump back to init action', ()=> {
      let transform = jasmine.createSpy('spy');
      let output = jasmine.createSpy('spy');
      let action = new BarcodeAction();
      action.doAction('q', transform, output);
      expect(transform).toHaveBeenCalledWith('init', output);
    })
  });

describe('BarcodeAction', ()=> {
  it('should jump back to init action', ()=> {
    let transform = jasmine.createSpy('spy');
    let output = jasmine.createSpy('spy');
    let action = new BarcodeAction();
    action.doAction('q', transform, output);
    expect(transform).toHaveBeenCalledWith('init', output);
  })
});

describe('BarcodeAction', ()=> {
  it('should jump  to init action', ()=> {
    let transform = jasmine.createSpy('spy');
    let output = jasmine.createSpy('spy');
    let action = new BarcodeAction();
    action.doAction('q', transform, output);
    expect(transform).toHaveBeenCalledWith('init', output);
  })
});



/**
 * Created by zhangpei on 16/8/3.
 */
