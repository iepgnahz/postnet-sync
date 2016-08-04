/**
 * Created by zhangpei on 16/8/4.
 */
$(document).ready(() => {
  $('#change').click(() => {
    $.post(
      "http://127.0.0.1:5000/barcode",
      { code: $('#code').val() },
      (data) => {
        console.log(data);
        $('#result').html(data);
      }
    )
  });
  $('#return').click(() => {
    window.location.href = "http://127.0.0.1:5000/html/init.html";
  });
});
