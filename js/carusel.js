$(document).ready(function () {
    const defaultWidth = 300;
    const animationTime = 1 * 1000;
    // Обе следующих переменных, пока не нужны.
    // Их мы будем использовать в следующий раз
    let girlUrls = [];
    let currentImageIndex = 3;

    initGirlsUrls();

    function initGirlsUrls() {
        for (let i = 0; i < 11; i++) {
            //const newGirlUrl = `images/girl${i}.jpg`;
            const girlImageNumber = i + 1;
            const newGirlUrl = 'images/girl' + girlImageNumber + '.jpg';
            girlUrls.push(newGirlUrl);
        }
    }

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

                currentImageIndex = currentImageIndex + 1;
                if (currentImageIndex >= girlUrls.length) {
                    currentImageIndex = 0;
                }
                const nextImageSrc = girlUrls[currentImageIndex];

                $('.after-next img').attr('src', nextImageSrc);

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
