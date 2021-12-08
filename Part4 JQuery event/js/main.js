$(document).ready(function () {

   $('p').click(function () {
      $(this).hide();
   });

   $('button').dblclick(function () {
      $('h1').hide();
   });

   $('.btn1').mouseenter(function () {
      alert("Hi");
   });

   $('.btn2').mouseleave(function () {
      alert("Hi Tanmoy");
   });

   $('.btn3').hover(function () {
      alert("Hello Tanmoy");
   },
      function () {
         alert("Bye Tanmoy");
      });
   $('input').focus(function () {
      $(this).css("background", "red");
   });
   $('.lorem').on("click", function () {
      $(this).hide();
   });
   $('.ipsum').on({
      mouseenter:function(){
         $(this).css("background-color","red");
      },
      mouseleave:function(){
         $(this).css("background-color","green");
      },
      click: function(){
         $(this).css("background-color","yellow");
      }
   });
});