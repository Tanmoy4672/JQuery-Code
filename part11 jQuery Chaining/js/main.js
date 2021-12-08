$(document).ready(function () {
   $('button').click(function () {
      $('.tanmoy').css("background", "green")
      .slideUp(1000).slideDown(1000);
   });
});