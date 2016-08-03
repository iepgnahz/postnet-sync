/**
 * Created by zhangpei on 16/7/29.
 */
"use strict";
function isLegalBarcode(code) {
  let codeArray = Array.from(code);
  let existItem = codeArray.find(item => (item !== "|" && item !== " " && item !== ":"));
  let flag1 = true;
  flag1 = existItem ? false : true;
  let flag2 = code.startsWith("| ") && code.endsWith(" |");
  return flag1 && flag2;
}

function formatBarcode(code) {
  return code.substring(1, code.length - 1).trim();
}

function divideBarcode(formattedBarcode) {
  return formattedBarcode.trim().split(/ +/);
}

function loadTranslatedMethod() {
  return [
    {postCode: "1", barcode: ":::||"},
    {postCode: "2", barcode: "::|:|"},
    {postCode: "3", barcode: "::||:"},
    {postCode: "4", barcode: ":|::|"},
    {postCode: "5", barcode: ":|:|:"},
    {postCode: "6", barcode: ":||::"},
    {postCode: "7", barcode: "|:::|"},
    {postCode: "8", barcode: "|::|:"},
    {postCode: "9", barcode: "|:|::"},
    {postCode: "0", barcode: "||:::"}
  ];
}

function isRightPostCode(barcodeItems, items) {
  return barcodeItems.every(item=> {
    return items.find(it=>it.barcode === item);
  });
}

function calculatePostCodeItems(barcodeItems, items) {
  return barcodeItems.map(item=> {
    let exist = items.find(it=>it.barcode === item);
    return Number(exist.postCode);
  });
}

function checkCD(postCodeItems) {
  let CD = postCodeItems[postCodeItems.length - 1];
  let checkCode = 10 - (postCodeItems.reduce((a, b) => a + b) - CD) % 10;
  if (checkCode === 10) checkCode = 0;
  return CD === checkCode;
}

function getPostCode(postCodeItems) {
  postCodeItems.length = postCodeItems.length - 1;
  let str = postCodeItems.join("");
  if (str.length === 9) {
    let str1 = str.substring(0, 5);
    let str2 = str.substring(5, str.length);
    str = str1 + "-" + str2;
  }
  return str;
}


class ChangedBarcode {

  changeBarcode(code) {
    let judgeCode = isLegalBarcode(code);
    if (judgeCode) {
      let formattedBarcode = formatBarcode(code);
      let barcodeItems = divideBarcode(formattedBarcode);
      let items = loadTranslatedMethod();
      if (isRightPostCode(barcodeItems, items)) {
        let postCodeItems = calculatePostCodeItems(barcodeItems, items);
        let judgeCD = checkCD(postCodeItems);
        return judgeCD ? getPostCode(postCodeItems) : "您输入条形码的校验值和真实校验值不符";
      } else {
        return "您输入的条形码中有不存在的码型";
      }
    } else {
      return "您输入的条形码不合法";
    }
  }
}

module.exports = ChangedBarcode;