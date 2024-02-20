$(document).ready(function () {
    const defaultWidth = 300;
    const animationTime = 3 * 1000;
    // Обе следующих переменных, пока не нужны.
    // Их мы будем использовать в следующий раз
    const girlUrls = ['images/girl1.jpg',
        'images/girl2.jpg',
        'images/girl3.jpg',
        'images/girl4.jpg',
        'images/girl5.jpg',
        'images/girl6.jpg'
    ];
    let currentImageIndex = 1;

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
                let firstImageSrc = $('.prev img').attr('src');

                moveImage('.center img', '.prev img');
                moveImage('.next img', '.center img');
                moveImage('.after-next img', '.next img');
                
                $('.after-next img').attr('src', firstImageSrc);

                $('.prev').css('width', defaultWidth);
                $('.after-next').css('width', 0);
            }
           );
    });

    function moveImage(imageSource, imageDestination) {
        var centerImageSrc = $(imageSource).attr('src');
        $(imageDestination).attr('src', centerImageSrc);
    }
});
