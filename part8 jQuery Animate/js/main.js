$(document).ready(function () {
    $('.btn1').click(function () {
        $('.container1').animate({
            left: '500px',
            width: '+=150px',
            height: '+=150px'

        });
    });
    $('.btn2').click(function () {
        $('.container2').animate({

            height: 'toggle'
        });
    });
    $('.btn3').click(function () {
        $('.container3').animate({

            width: 'toggle'
        });
    });
    $('.btn4').click(function () {
        var tanmoy = $('.container4');
        tanmoy.animate({
            height: '300px',
            opacity: 0.5,
        }, "slow");
    });
    $('.btn5').click(function () {
        var tanmoy = $('.container5');
        tanmoy.animate({
            width: '300px',
            opacity: 0.5,
        }, "slow");
    });
    //main animation
    $('.btn6').click(function () {
        var tanmoy = $('.container6');
        tanmoy.animate({
            height: '300px',
            opacity: 0.8,
        }, "slow");
        tanmoy.animate({
            width: '300px',
            opacity: 0.5,
        }, "slow");
        tanmoy.animate({
            height: '100px',
            opacity: 0.8,
        }, "slow");
        tanmoy.animate({
            width: '100px',
            opacity: 1.0,
        }, "slow");
    });
    $('.btn7').click(function () {
        var tanmoy = $('.container7');
        tanmoy.animate({
            left: '300px'
        }, "slow");
        tanmoy.animate({ fontSize: '30px'}, 'fast');
});
});