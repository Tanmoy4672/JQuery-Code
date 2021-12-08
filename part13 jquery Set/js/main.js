$(document).ready(function () {
   $("#btn1").click(function(){
      $("#lorem").text("Hi");
   });
   $("#btn2").click(function(){
      $("#lorem2").html("<h2>Hi</h2>");
   });
   $("#btn3").click(function(){
      $("#lorem3").val("Enter your password");
   });
   $("#btn4").click(function(){
      $("#lorem4").attr("href","www.youtube.com");
   });
});