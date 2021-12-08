$(document).ready(function () {
   $('.tanmoy').click(function(){
      $('.lorem').slideDown(2000);
   });

   $('button').click(function(){
       $('.lorem').stop();
   })
});