$(document).ready(function () {

   $('#hide').click(function () {
      $('p').hide('slow');
   });
   $('#show').click(function(){
      $('p').show(5000);
   });

   $('button').click(function(){
      $('p').toggle();
   });
});