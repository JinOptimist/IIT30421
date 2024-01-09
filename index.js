$(document).ready(function () {
    init();

    $('.girl').click(function () {
        $('.girl').removeClass('red');
        $(this).addClass('red');
    });

    $('.remove').click(function () {
        $(this).parent().hide(2 * 1000);
    });

    $('.show-all').click(function () {
        $('.girl').show(5 * 1000);
    });

    $('.boxes').click(function () {
        let isRedActive = $('.boxes .active').hasClass('red');

        $('.box').toggleClass('active');

        if (isRedActive) {
            $('.box.red').animate(
                {
                    height: 0
                },
                2 * 1000);
            $('.box.green').animate(
                {
                    height: 100
                },
                2 * 1000);
        } else {
            $('.box.red').animate(
                {
                    height: 100
                },
                2 * 1000);
            $('.box.green').animate(
                {
                    height: 0
                },
                2 * 1000);
        }

    });

    function init() {
        $('.box.green').css('height', 0);
    }
});