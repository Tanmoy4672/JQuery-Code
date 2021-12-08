$(document).ready(function(){

    $('button').click(function(){
        $('.box1').fadeOut();
        $('.box2').fadeOut('slow');
        $('.box3').fadeOut(5000);
    });

    
    $('.btn1').click(function(){
        $('.box4').fadeIn();
        $('.box5').fadeIn('slow');
        $('.box6').fadeIn(5000);
    });
    $('.btn2').click(function(){
        $('.box7').fadeToggle();
        $('.box8').fadeToggle('slow');
        $('.box9').fadeToggle(5000);
    });
});