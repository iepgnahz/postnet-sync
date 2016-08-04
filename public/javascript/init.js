/**
 * Created by zhangpei on 16/8/4.
 */
$(document).ready(() => {
  console.log(111);
  menuBtnsAction();
});

function menuBtnsAction() {
  $('#postcode').click(() => { window.location.href = "http://127.0.0.1:5000/html/postcode.html"; });
  $('#barcode').click(() => { window.location.href = "http://127.0.0.1:5000/html/barcode.html"; });
  $('#return').click(() => { window.location.href = "http://127.0.0.1:5000/html/init.html"; });
}
