/**
 * Created by zhangpei on 16/8/4.
 */
$(document).ready(function() {
  $('#change').click(function() {
    $.post(
      "http://127.0.0.1:5000/barcode",
      { code: $('#barcode').val() },
      function (data) {
        var oDiv = document.getElementById("result");
        oDiv.innerHTML = data
      }
    )
  });
  $('#return').click(function() {
    window.location.href = "http://127.0.0.1:5000/html/init.html";
  });
});


