$(document).ready(function () {
   $('#btn1').click(function () {
      alert("Text: " + $("#lorem").text());
   });
   $('#btn2').click(function () {
      alert("Text: " + $("#lorem").html());
   });
   $("#btn3").click(function () {
      alert($("#tanmoy").val());
   });
   $("#btn4").click(function () {
      alert($("#tonu").attr("href"));
   });
});