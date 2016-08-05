/**
 * Created by zhangpei on 16/8/5.
 */
'use strict';
var MongoClient = require("mongodb").MongoClient;
let url = 'mongodb://localhost:27017/records';

function connectDB(completation){
  MongoClient.connect(url, (err,db)=>{
    completation(db);  //链接成功后调用,把所有数据库相关内容放给db
  })
}

function insertRecord(record){
  connectDB((db)=>{
    db.collection("record").insertOne(record,(err,result)=>{
      db.close();
    });     //collection的参数是表名字
  })
}

function searchRecords(callback) {
  connectDB((db)=>{
    let cursor = db.collection("record").find();
    let allItems = [];
    cursor.each((err,doc)=>{
      doc !== null ? allItems.push(docToItem(doc)) : callback(allItems,err);
    });
    db.close();
  });
}

function docToItem(doc) {
  return {
    code : doc.code,
    result: doc.result
  }
}

module.exports = {
  insertRecord : insertRecord,
  searchRecords : searchRecords
};
