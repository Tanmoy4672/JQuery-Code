$(document).ready(function(){

    $('.btn1').click(function(){
        $('.lorem').slideDown();
    });

    $('.btn2').click(function(){
        $('.lorem2').slideUp();
    });

    $('.btn3').click(function(){
        $('.lorem3').slideToggle();
    });
});