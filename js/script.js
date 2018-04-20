$(document).ready(function() {

    // slide1
    $(".sld1 .plus").click(function () {
        $(".sld1 .s1").fadeIn(500);
        $(".sld1 .s0").fadeOut(500);
    });
    $(".sld1 .s1 .x").click(function () {
        $(".sld1 .s1").fadeOut(500);
        $(".sld1 .s0").fadeIn(500);
        setTimeout(function () {
            $('input[type="range"]').fadeIn(100);
            $('.sld1 .s1 .scale').fadeIn(100);
            $(".sld1 .s1 .title1").fadeIn(100);
            $(".sld1 .s1 .title2").fadeOut(100);
            $(".sld1 .s1 .lotion").fadeOut(100);
        }, 300);
    });
    $('input[type="range"]').change(function () {
        var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
        var val2 = val *0.7
        $(this).css('background-image',
            '-webkit-gradient(linear, left top, right top, '
            + 'color-stop(' + val2 + ', #7cc7b6), '
            + 'color-stop(' + val + ', #fff)'
            + ')'
        );
        var value = $(this).val();
        switch(value) {
            // case '0': $('.sld1 .range-plus').css('top', '616px').fadeIn(); break;
            case '10': $('.sld1 .range-plus').css('top', '484px').fadeIn(); break;
            case '20': $('.sld1 .range-plus').css('top', '353px').fadeIn(); break;
            case '30': $('.sld1 .range-plus').css('top', '221px').fadeIn(); break;
            case '40': $('.sld1 .range-plus').css('top', '89px').fadeIn(); break;
        }
    });

    $('.sld1 .range-plus').click(function () {
        $('.sld1 .range-plus').fadeOut(500);
        $('input[type="range"]').fadeOut(500);
        $('.sld1 .s1 .scale').fadeOut(500);
        $(".sld1 .s1 .title1").fadeOut(500);
        $(".sld1 .s1 .title2").fadeIn(500);
        $(".sld1 .s1 .lotion").fadeIn(500);
    });


    // slide3
    $(".sld2 .s0 .lotion").addClass('animated zoomIn');
    $(".sld2 .s0 .list").addClass('list--animated');

    //slide3
    $(".sld3 .s0 .block-1 .arrow").click(function () {
        $(".sld3 .s0 .block-1").toggleClass('block-wide');
    })
    $(".sld3 .s0 .block-2 .arrow").click(function () {
        $(".sld3 .s0 .block-2").toggleClass('block-wide');
    })
    $(".sld3 .s0 .block-3 .arrow").click(function () {
        $(".sld3 .s0 .block-3").toggleClass('block-wide');
    })

    // slide4
    $(".sld4 .s0 .items .item .price-1").addClass('price-anim');
    $(".sld4 .s0 .items .item .price-2").addClass('price-anim');
    $(".sld4 .s0 .items .item .price-3").addClass('price-anim');

    $(".sld4 .s0 .plus").click(function () {
        $(".sld4 .s0").fadeOut(500);
        $(".main-m").fadeOut(500);
        $(".sld4 .s1").fadeIn(500);
        setTimeout(function () {
            $(".sld4 .s1 .list").addClass('list-anim');
        }, 300);
    })
    $(".sld4 .s1 .x").click(function () {
        $(".sld4 .s1").fadeOut(500);
        $(".main-m").fadeIn(500);
        $(".sld4 .s0").fadeIn(500);
        setTimeout(function () {
            $(".sld4 .s1 .list").removeClass('list-anim');
        }, 600);
    })
    $(".sld4 .s1 .plus-fluid").click(function () {
        $(".sld4 .s1").fadeOut(500);
        $(".main-m").fadeOut(500);
        $(".sld4 .s1-1").fadeIn(500);
        $(".sld4 .s1-1 .good-item .img").addClass('animated zoomIn');
        setTimeout(function () {
            $(".sld4 .s1-1 .list").addClass('list-anim');
            
        }, 1000);
        setTimeout(function () {
            $(".sld4 .s1 .list").removeClass('list-anim');
        }, 600);
    })
    $(".sld4 .s1-1 .plus-result").click(function () {
        $(".sld4 .s1-1 .popup").fadeIn(500);
    })
    $(".sld4 .s1-1 .popup .p-x").click(function () {
        $(".sld4 .s1-1 .popup").fadeOut(500);
    })
    $(".sld4 .s1-1 .x").click(function () {
        $(".sld4 .s1-1").fadeOut(500);
        $(".sld4 .s1").fadeIn(500);
        $(".sld4 .s1-1 .good-item .img").removeClass('animated zoomIn');
        setTimeout(function () {
            $(".sld4 .s1 .list").addClass('list-anim');
            $(".sld4 .s1-1 .list").removeClass('list-anim');
        }, 600);
    })

    $(".sld4 .s1 .plus-3d").click(function () {
        $(".sld4 .s1").fadeOut(500);
        $(".main-m").fadeOut(500);
        $(".sld4 .s1-2").fadeIn(500);
        $(".sld4 .s1-2 .good-item .img").addClass('animated zoomIn');
        setTimeout(function () {
            $(".sld4 .s1-2 .list").addClass('list-anim');
            
        }, 1000);
        setTimeout(function () {
            $(".sld4 .s1 .list").removeClass('list-anim');
        }, 600);
    })
    $(".sld4 .s1-2 .plus-result").click(function () {
        $(".sld4 .s1-2 .popup-1").fadeIn(500);
    })
    $(".sld4 .s1-2 .popup-1 .p-x").click(function () {
        $(".sld4 .s1-2 .popup-1").fadeOut(500);
    })
    $(".sld4 .s1-2 .plus-relief").click(function () {
        $(".sld4 .s1-2 .popup-2").fadeIn(500);
    })
    $(".sld4 .s1-2 .popup-2 .p-x").click(function () {
        $(".sld4 .s1-2 .popup-2").fadeOut(500);
    })
    $(".sld4 .s1-2 .x").click(function () {
        $(".sld4 .s1-2").fadeOut(500);
        $(".sld4 .s1").fadeIn(500);
        $(".sld4 .s1-2 .good-item .img").removeClass('animated zoomIn');
        setTimeout(function () {
            $(".sld4 .s1 .list").addClass('list-anim');
            $(".sld4 .s1-2 .list").removeClass('list-anim');
        }, 600);
    })
});