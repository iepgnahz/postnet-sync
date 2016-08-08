/**
 * Created by zhangpei on 16/8/5.
 */
'use strict';
var MongoClient = require("mongodb").MongoClient;
let url = 'mongodb://localhost:27017/records';

function connectDB(completation){
  MongoClient.connect(url, (err,db)=>{
    completation(db);
  })
}

function insertRecord(record){
  connectDB((db)=>{
    db.collection("record").insertOne(record,(err,result)=>{
      db.close();
    });
  })
}

function searchRecords(callback) {
  connectDB((db)=>{
    let cursor = db.collection("record").find();
    let allItems = [];
    cursor.each((err,doc)=>{
      if(doc !== null){
        allItems.push(docToItem(doc));
      } else {
        allItems.reverse();
        allItems.length = allItems.length <= 10 ? allItems.length : 10;
        callback(allItems,err)
      };
    });
    db.close();
  });
}

function docToItem(doc) {
  return {
    code : doc.code,
    result: doc.result,
    time: doc.time,
    method: doc.method
  }
}

module.exports = {
  insertRecord : insertRecord,
  searchRecords : searchRecords
};
