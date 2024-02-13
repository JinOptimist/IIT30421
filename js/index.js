$(document).ready(function () {
    const arrayOfGirlUrls = ['Card1.jpg', 'Card2.jpg', 'Card3.jpg'];

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

    $('.card').click(function () {
        let cardBlock = $(this);
        rotateImage(
            cardBlock,
            90,
            () => {
                cardBlock.find('img').toggleClass('active');
                rotateImage(
                    cardBlock,
                    0);
            });
    });

    $('.boxes-css .box').click(function () {
        $(this).parent().find('.box').toggleClass('active');
    });

    $('.menu').click(function(){
        $(this).toggleClass('open');
    });

    $('.images-for-hide-css .girl').click(function(){
        $(this).toggleClass('remove');
    });

    // $('.images-for-hide-css .show-all').click(function(){
    //     $('.images-for-hide-css .girl').removeClass('remove');
    // });


    function rotateImage(blockToRotate, finalAngle, completeFunction) {
        blockToRotate.animate(
            {
                smile: finalAngle
            },
            {
                duration: 1 * 1000,
                step: function (smile) {
                    console.log(smile);
                    blockToRotate.css('transform', 'rotateY(' + smile + 'deg)');
                },
                complete: function () {
                    if (completeFunction) {
                        completeFunction();
                    }
                }
            });
    }

    function init() {
        $('.box.green').css('height', 0);
        for (let i = 0; i < arrayOfGirlUrls.length; i++) {
            const imageUrl = arrayOfGirlUrls[i];
            generateCardBlock(imageUrl);
        }
    }

    function generateCardBlock(imageUrl) {
        let blockCard = $('.card.template').clone();
        blockCard.removeClass('template');
        blockCard.find('.face').attr('src', 'images/' + imageUrl);
        $('.card-rotate').append(blockCard);
    }

    function generateCardBlockHARD(imageUrl) {
        let cardDiv = $('<div>');
        cardDiv.addClass('card');

        let imgFace = $('<img>');
        imgFace.addClass('face');
        imgFace.attr('src', 'image/' + imageUrl);

        let imgCover = $('<img>');
        imgFace.addClass('cover');
        imgFace.addClass('active');
        imgFace.attr('src', 'images/card_cover.png');

        cardDiv.append(imgFace);
        cardDiv.append(imgCover);
    }
});