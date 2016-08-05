/**
 * Created by zhangpei on 16/8/3.
 */
import PostcodeAction from "../../../client/actions/PostcodeAction";

// describe("doPostcodeAction", function () {
//   let action;
//   beforeEach(() => {
//     spyOn(console, "log");
//     action = new PostcodeAction();
//   });
//
//   it("should return a string", function () {
//     let currentAction = "postcode";
//     let cmd = "asd";
//     let result = action.doAction(cmd);
//     let expectResult = "postcode";
//     expect(result).toEqual(expectResult);
//   });
//
//   it("should return a string", function () {
//     let currentAction = "postcode";
//     let cmd = "12345";
//     let result = action.doAction(cmd);
//     let expectResult = "init";
//     expect(result).toEqual(expectResult);
//   });
//
//   it("should return a string", function () {
//     let currentAction = "postcode";
//     let cmd = "q";
//     let result = action.doAction(cmd);
//     let expectResult = "init";
//     expect(result).toEqual(expectResult);
//   })
// });
//
// describe("/postcode",()=>{
//   it("respond with barcode",()=>{
//     request
//       .post("/postcode")
//       .type("form")
//       .send({code: "12345"})
//       .expect(200,"| :::|| ::|:| ::||: :|::| :|:|: :|:|: |")
//       .end((err,res)=>{
//         console.log(err);
//         err ? console.log("F") : console.log("T")
//       })
//   });
//
//   it("respond with err",()=>{
//     request
//       .post("/postcode")
//       .send({code:"123"})
//       .type("form")
//       .expect(200,"您输入的邮编不合法,应是5,9或者10数字0-9字符,并且若有-,其应在第六位处")
//       .end((err,res)=>{
//         console.log(err);
//         err ? console.log("F") : console.log("T")
//       })
//   })
// });