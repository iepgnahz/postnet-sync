/**
 * Created by zhangpei on 16/8/5.
 */
$(document).ready(function() {
  $('#transform').click(function() {
    $.post(
      $("input[name='code'][checked]").val(),
      { code: $('#input').val() },
      (data) => {
        console.log(data);
        $('#result').html(data);
        // $('#input').value("");
      }
    )
  });
});
