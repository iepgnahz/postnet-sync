/**
 * Created by zhangpei on 16/8/3.
 */
/**
 * Created by zhangpei on 16/7/29.
 */

import InitAction from "../../../client/actions/InitAction";

// describe("doInitAction", function () {
//   let action;
//   beforeEach(() => {
//     spyOn(console, "log");
//     action = new InitAction();
//   });
//
//   it("should return a string", function () {
//     let currentAction = "init";
//     let cmd = "1";
//     let result = action.doAction(cmd);
//     let expectResult = "postcode";
//     expect(result).toEqual(expectResult);
//   });
//
//   xit("should return a string", function () {
//     let currentAction = "init";
//     let cmd = "2";
//     let result = action.doAction(cmd);
//     let expectResult = "barcode";
//     expect(result).toEqual(expectResult);
//   });
//
//   it("should return a string", function () {
//     let currentAction = "init";
//     let cmd = "q";
//     spyOn(process, "exit");
//     action.doAction(cmd);
//     expect(process.exit).toHaveBeenCalled();
//   });
// });