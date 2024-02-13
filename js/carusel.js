$(document).ready(function () {
    const defaultWidth = 300;
    const animationTime = 2 * 1000;
    
    $('.next').click(function () {
        $('.prev').animate({
            'width': 0
        }, animationTime);

        $('.after-next').animate(
            {
                'width': defaultWidth
            },
            animationTime,
            'swing',
            function () {
                moveImage('.center img', '.prev img');
                moveImage('.next img', '.center img');
                moveImage('.after-next img', '.next img');

                $('.prev').css('width', defaultWidth);
                $('.after-next').css('width', 0);
            });
    });

    function moveImage(imageSource, imageDestination) {
        var centerImageSrc = $(imageSource).attr('src');
        $(imageDestination).attr('src', centerImageSrc);
    }
});