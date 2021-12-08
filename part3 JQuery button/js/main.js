$(document).ready(function () {
    $('h2').show();

    $('button').click(function () {
        $('p').hide();
    });

    $('.btn2').click(function () {
        $('ul li:first-child').hide();
    });

    $('.btn3').click(function () {
        $('a').hide();
    });

    $('.btn4').click(function () {
        $('a[target="_blank"]').hide();
    });
});