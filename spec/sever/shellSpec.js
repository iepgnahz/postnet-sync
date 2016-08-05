/**
 * Created by zhangpei on 16/8/5.
 */
var superTest = require("supertest");
var app = require("../../sever/shell");
var request = superTest(app);

describe('post/postcode', function () {
  it('should get a parameter from barcode', function (done) {
    request
      .post("/postcode")
      .type("form")
      .send({code: "12345"})
      .expect(200, "| :::|| ::|:| ::||: :|::| :|:|: :|:|: |")
      .end((err, res)=> {
        if (err) {
          done.fail(err)
        } else {
          done();
        }
      })
  });

  it('should get a parameter from barcode', function (done) {
    request
      .post("/postcode")
      .type("form")
      .send({code: "1234"})
      .expect(200, "您输入的邮编不合法,应是5,9或者10数字0-9字符,并且若有-,其应在第六位处")
      .end((err, res)=> {
        if (err) {
          done.fail(err)
        } else {
          done();
        }
      })
  });

});

describe('post/barcode', function () {
  it('should get a parameter from postcode', function (done) {
    request
      .post("/barcode")
      .send({code: "1234"})
      .type("form")
      .expect(200, "您输入的条形码不合法")
      .end((err, res)=> {
        if (err) {
          done.fail(err)
        } else {
          done();
        }
      })
  });

  it('should get a parameter from postcode', function (done) {
    request
      .post("/barcode")
      .send({code: "| :::|| ::|:| ::||: :|::| :|:|: :|:|: |"})
      .type("form")
      .expect(200, "12345")
      .end((err, res)=> {
        if (err) {
          done.fail(err)
        } else {
          done();
        }
      })
  });

});
