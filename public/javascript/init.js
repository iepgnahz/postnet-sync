/**
 * Created by zhangpei on 16/8/4.
 */
$(document).ready(() => {
  menuBtnsAction();
});

function menuBtnsAction() {
  $('#postcode').click(() => { window.location.href = "http://127.0.0.1:5000/postcode"; });
  $('#barcode').click(() => { window.location.href = "http://127.0.0.1:5000/barcdoe"; });
  $('#return').click(() => { window.location.href = "http://127.0.0.1:5000/html/init.html"; });
}
