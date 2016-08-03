"use strict";
var request = require('superagent');

class PostcodeAction {
  constructor() {
    this.name = "postcode";
    this.help = "请输入邮编(q返回上一层):";
  }

  doAction(cmd,transform,output) {
    if (cmd === "q") {
      let current =  "init";
      transform(current,output);
    } else {
      let current = "init";
      changePostcodeAction(cmd,transform,current,output);
    }
  }
}

function changePostcodeAction(cmd,transform,current,output) {
  var changedCode = "";
  request
    .post(`http://127.0.0.1:5000/postcode`)
    .type("form")
    .send({code: cmd.trim()})
    .end(function (err, res) {
      changedCode = res.text;
      console.log(res.text);
      transform(current,output);
    });
}


module.exports = PostcodeAction;