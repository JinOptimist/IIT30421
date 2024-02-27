$(document).ready(function () {
    const defaultWidth = 300;
    const animationTime = 1.5 * 1000;
    // Обе следующих переменных, пока не нужны.
    // Их мы будем использовать в следующий раз
    let girlUrls = [];
    let centerImageIndex = 2;

    initGirlsUrls();

    function initGirlsUrls() {
        for (let i = 0; i < 15; i++) {
            //const newGirlUrl = `images/girl${i}.jpg`;
            const girlImageNumber = i;
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
                moveImage('.prev img', '.before-prev img');
                moveImage('.center img', '.prev img');
                moveImage('.next img', '.center img');
                moveImage('.after-next img', '.next img');

                centerImageIndex = calculateSafeIndex(centerImageIndex + 1);
                const nextImageSrc = girlUrls[calculateSafeIndex(centerImageIndex + 2)];

                $('.after-next img').attr('src', nextImageSrc);

                $('.prev').css('width', defaultWidth);
                $('.after-next').css('width', 0);
            }
        );
    });

    $('.prev').click(function () {
        $('.before-prev').animate(
            {
                width: defaultWidth
            },
            animationTime);

        $('.next').animate(
            {
                width: 0
            },
            animationTime,
            'swing',
            function () {
                moveImage('.next img', '.after-next img');
                moveImage('.center img', '.next img');
                moveImage('.prev img', '.center img');
                moveImage('.before-prev img', '.prev img');

                centerImageIndex = calculateSafeIndex(centerImageIndex - 1);
                const prevImageSrc = girlUrls[calculateSafeIndex(centerImageIndex - 2)];

                $('.before-prev img').attr('src', prevImageSrc);

                $('.next').css('width', defaultWidth);
                $('.before-prev').css('width', 0);
            });
    });

    function calculateSafeIndex(index) {
        if (index < 0) {
            index = index + girlUrls.length;
        }
        if (index >= girlUrls.length) {
            index = index - girlUrls.length;
        }
        return index;
    }

    function moveImage(imageSource, imageDestination) {
        var centerImageSrc = $(imageSource).attr('src');
        $(imageDestination).attr('src', centerImageSrc);
    }
});
