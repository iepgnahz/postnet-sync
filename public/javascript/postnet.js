/**
 * Created by zhangpei on 16/8/5.
 */
$(document).ready(function() {
  addOkBtnAction();
  fetchRecentRecords();
});

function fetchRecentRecords() {
  $.get("http://127.0.0.1:5000/records", (data) => {
    $("#history").html(JSON.stringify(data))
  });
}

function addOkBtnAction() {
  $('#transform').click(function() {
    $.post(
      $("input[name='code'][checked='checked']").val(),
      { code: $('#input').val() },
      (data) => {
        console.log(data);
        $('#result').html(data);
        fetchRecentRecords();
      }
    )
  });
}

