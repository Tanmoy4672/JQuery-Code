$(document).ready(function () {
   $(".btn1").click(function () {
      $("p").append("<b>Tanmoy</b>");
   })
   $(".btn2").click(function () {
      $("p").prepend("<b>Tanmoy</b>");
   })
   $(".btn3").click(function () {
      $("img").before("<b>Tanmoy</b>");
   })
   $(".btn4").click(function () {
      $("img").after("<b>Tanmoy</b>");
   })
});