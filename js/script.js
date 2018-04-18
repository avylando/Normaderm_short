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

    // slide2
    $(".sld2 .list1 .plus").click(function () {
        $(".sld2 .rect-1").fadeOut(500);
        $(".sld2 .popup1").fadeIn(500);
    })

    $(".sld2 .list2 .plus").click(function () {
        $(".sld2 .popup2").fadeIn(500);
    })

    $(".sld2 .list3 .plus").click(function () {
        $(".sld2 .popup3").fadeIn(500);
    })

    //slide3
    $(".sld3 .s0 .lotion").addClass('animated zoomIn');

    $(".sld3 .s0 .plus-1").click(function () {
        $(".sld3 .s0").fadeOut(500);
        $(".sld3 .s1").fadeIn(500);
        setTimeout(function () {
            $(".sld3 .s1 .col").removeClass('col-e');
            $(".sld3 .s1 .rect").removeClass('rect-f');
        }, 300);
        
        $(".sld3 .s1 .graph .number").hide();
        $(".sld3 .s1 .rects-l").hide();
        setTimeout(function () {
            $(".sld3 .s1 .graph .number").fadeIn(300);
            $(".sld3 .s1 .rects-l").fadeIn(800);
        }, 800);
    })
    $(".sld3 .s1 .x").click(function () {
        $(".sld3 .s1").fadeOut(500);
        $(".sld3 .s0").fadeIn(500);
        setTimeout(function () {
            $(".sld3 .s1 .col").addClass('col-e');
            $(".sld3 .s1 .rect").addClass('rect-f');
        }, 300);
    })
    $(".sld3 .s1 .p").click(function () {
        $(".sld3 .s1 .protocol").fadeIn(500);
    })
    $(".sld3 .s1 .pr-x").click(function () {
        $(".sld3 .s1 .protocol").fadeOut(500);
    })
    $(".sld3 .s1 .button-off").click(function () {
        $(".sld3 .s1").fadeOut(500);
        $(".sld3 .s2").fadeIn(500);
        setTimeout(function () {
            $(".sld3 .s2 .col").removeClass('col-e');
            $(".sld3 .s2 .rect").removeClass('rect-f');
            $(".sld3 .s1 .col").addClass('col-e');
            $(".sld3 .s1 .rect").addClass('rect-f');
            $(".sld3 .s1 .rects-l").hide();
        }, 300);
        
        $(".sld3 .s2 .graph .number").hide();
        $(".sld3 .s2 .rects-l").hide();
        setTimeout(function () {
            $(".sld3 .s2 .graph .number").fadeIn(300);
            $(".sld3 .s2 .rects-l").fadeIn(800);
        }, 800);
    })
    $(".sld3 .s2 .button-off").click(function () {
        $(".sld3 .s2").fadeOut(500);
        $(".sld3 .s1").fadeIn(500);
        setTimeout(function () {
            $(".sld3 .s1 .col").removeClass('col-e');
            $(".sld3 .s1 .rect").removeClass('rect-f');
            $(".sld3 .s2 .col").addClass('col-e');
            $(".sld3 .s2 .rect").addClass('rect-f');
        }, 300);
        
        $(".sld3 .s1 .graph .number").hide();
        $(".sld3 .s2 .rects-l").hide();
        setTimeout(function () {
            $(".sld3 .s1 .graph .number").fadeIn(300);
            $(".sld3 .s1 .rects-l").fadeIn(800);
        }, 800);
    })
    $(".sld3 .s2 .x").click(function () {
        $(".sld3 .s2").fadeOut(500);
        $(".sld3 .s0").fadeIn(500);
        setTimeout(function () {
            $(".sld3 .s2 .col").addClass('col-e');
            $(".sld3 .s2 .rect").addClass('rect-f');
        }, 300);
    })
    $(".sld3 .s2 .p").click(function () {
        $(".sld3 .s2 .protocol").fadeIn(500);
    })
    $(".sld3 .s2 .pr-x").click(function () {
        $(".sld3 .s2 .protocol").fadeOut(500);
    })

    $(".sld3 .s0 .plus-2").click(function () {
        $(".sld3 .s0").fadeOut(500);
        $(".sld3 .s3").fadeIn(500);
    })
    $(".sld3 .s3 .x").click(function () {
        $(".sld3 .s3").fadeOut(500);
        $(".sld3 .s0").fadeIn(500);
    })
    $(".sld3 .s3 .block-1 .plus").click(function () {
        $(".sld3 .s3").fadeOut(500);
        $(".sld3 .s3-1").fadeIn(500);
        setTimeout(function () {
            $(".sld3 .s3-1 .col").removeClass('col-e');
            $(".sld3 .s3-1 .rect").removeClass('rect-f');
        }, 300);
        
        $(".sld3 .s3-1 .graph .number").hide();
        $(".sld3 .s3-1 .rects-l").hide();
        setTimeout(function () {
            $(".sld3 .s3-1 .graph .number").fadeIn(300);
            $(".sld3 .s3-1 .rects-l").fadeIn(800);
        }, 800);
    })
    $(".sld3 .s3-1 .x").click(function () {
        $(".sld3 .s3-1").fadeOut(500);
        $(".sld3 .s3").fadeIn(500);
        setTimeout(function () {
            $(".sld3 .s3-1 .col").addClass('col-e');
            $(".sld3 .s3-1 .rect").addClass('rect-f');
        }, 300);
    })

    $(".sld3 .s3 .block-2 .plus").click(function () {
        $(".sld3 .s3").fadeOut(500);
        $(".sld3 .s3-2").fadeIn(500);
        setTimeout(function () {
            $(".sld3 .s3-2 .col").removeClass('col-e');
            $(".sld3 .s3-2 .rect").removeClass('rect-f');
        }, 300);
        
        $(".sld3 .s3-2 .graph .number").hide();
        $(".sld3 .s3-2 .rects-l").hide();
        setTimeout(function () {
            $(".sld3 .s3-2 .graph .number").fadeIn(300);
            $(".sld3 .s3-2 .rects-l").fadeIn(800);
        }, 800);
    })
    $(".sld3 .s3-2 .x").click(function () {
        $(".sld3 .s3-2").fadeOut(500);
        $(".sld3 .s3").fadeIn(500);
        setTimeout(function () {
            $(".sld3 .s3-2 .col").addClass('col-e');
            $(".sld3 .s3-2 .rect").addClass('rect-f');
        }, 300);
    })

    $(".sld3 .s3 .block-3 .plus").click(function () {
        $(".sld3 .s3").fadeOut(500);
        $(".sld3 .s3-3").fadeIn(500);
        setTimeout(function () {
            $(".sld3 .s3-3 .col").removeClass('col-e');
            $(".sld3 .s3-3 .rect").removeClass('rect-f');
        }, 300);
        
        $(".sld3 .s3-3 .graph .number").hide();
        $(".sld3 .s3-3 .rects-l").hide();
        setTimeout(function () {
            $(".sld3 .s3-3 .graph .number").fadeIn(300);
            $(".sld3 .s3-3 .rects-l").fadeIn(800);
        }, 800);
    })
    $(".sld3 .s3-3 .x").click(function () {
        $(".sld3 .s3-3").fadeOut(500);
        $(".sld3 .s3").fadeIn(500);
        setTimeout(function () {
            $(".sld3 .s3-3 .col").addClass('col-e');
            $(".sld3 .s3-3 .rect").addClass('rect-f');
        }, 300);
    })

    $(".sld3 .s3 .p").click(function () {
        $(".sld3 .s3 .protocol").fadeIn(500);
    })
    $(".sld3 .s3 .pr-x").click(function () {
        $(".sld3 .s3 .protocol").fadeOut(500);
    })

    $(".sld3 .s0 .plus-4").click(function () {
        $(".sld3 .s0").fadeOut(500);
        $(".sld3 .s4").fadeIn(500);
        setTimeout(function () {
            $(".sld3 .s4 .col").removeClass('col-e');
            $(".sld3 .s4 .rect").removeClass('rect-f');
        }, 300);
        
        $(".sld3 .s4 .gr-item .number").hide();
        setTimeout(function () {
            $(".sld3 .s4 .gr-item .number").fadeIn(1000);
        }, 800);
    })
    $(".sld3 .s4 .x").click(function () {
        $(".sld3 .s4").fadeOut(500);
        $(".sld3 .s0").fadeIn(500);
        setTimeout(function () {
            $(".sld3 .s4 .col").addClass('col-e');
            $(".sld3 .s4 .rect").addClass('rect-f');
        }, 300);
    })
    $(".sld3 .s4 .p").click(function () {
        $(".sld3 .s4 .popup").fadeIn(500);
    })
    $(".sld3 .s4 .popup .pr-x").click(function () {
        $(".sld3 .s4 .popup").fadeOut(500);
    })

    $(".sld3 .s0 .plus-3").click(function () {
        $(".sld3 .s0").fadeOut(500);
        $(".sld3 .s5").fadeIn(500);
        setTimeout(function () {
            $(".sld3 .s5 .col").removeClass('col-e');
            $(".sld3 .s5 .rect").removeClass('rect-f');
        }, 300);
        
        $(".sld3 .s5 .graph .number").hide();
        $(".sld3 .s5 .rects-l").hide();
        setTimeout(function () {
            $(".sld3 .s5 .graph .number").fadeIn(300);
            $(".sld3 .s5 .rects-l").fadeIn(800);
        }, 800);
    })
    $(".sld3 .s5 .x").click(function () {
        $(".sld3 .s5").fadeOut(500);
        $(".sld3 .s0").fadeIn(500);
        setTimeout(function () {
            $(".sld3 .s5 .col").addClass('col-e');
            $(".sld3 .s5 .rect").addClass('rect-f');
        }, 300);
    })
    $(".sld3 .s5 .p").click(function () {
        $(".sld3 .s5 .protocol").fadeIn(500);
    })
    $(".sld3 .s5 .protocol .pr-x").click(function () {
        $(".sld3 .s5 .protocol").fadeOut(500);
    })


    // slide4
    $(".sld4 .s0 .lotion").addClass('animated slideInLeft');

    //slide5
    $(".sld5 .s0 .block-1 .arrow").click(function () {
        $(".sld5 .s0 .block-1").toggleClass('block-wide');
    })
    $(".sld5 .s0 .block-2 .arrow").click(function () {
        $(".sld5 .s0 .block-2").toggleClass('block-wide');
    })
    $(".sld5 .s0 .block-3 .arrow").click(function () {
        $(".sld5 .s0 .block-3").toggleClass('block-wide');
    })

    // slide6
    $(".sld6 .s0 .plus").click(function () {
        $(".sld6 .s0").fadeOut(500);
        $(".main-m").fadeOut(500);
        $(".sld6 .s1").fadeIn(500);
        setTimeout(function () {
            $(".sld6 .s1 .list").addClass('list-anim');
        }, 300);
    })
    $(".sld6 .s1 .x").click(function () {
        $(".sld6 .s1").fadeOut(500);
        $(".main-m").fadeIn(500);
        $(".sld6 .s0").fadeIn(500);
        setTimeout(function () {
            $(".sld6 .s1 .list").removeClass('list-anim');
        }, 600);
    })
    $(".sld6 .s1 .plus-fluid").click(function () {
        $(".sld6 .s1").fadeOut(500);
        $(".main-m").fadeOut(500);
        $(".sld6 .s1-1").fadeIn(500);
        $(".sld6 .s1-1 .good-item .img").addClass('animated zoomIn');
        setTimeout(function () {
            $(".sld6 .s1-1 .list").addClass('list-anim');
            
        }, 1000);
        setTimeout(function () {
            $(".sld6 .s1 .list").removeClass('list-anim');
        }, 600);
    })
    $(".sld6 .s1-1 .plus-result").click(function () {
        $(".sld6 .s1-1 .popup").fadeIn(500);
    })
    $(".sld6 .s1-1 .popup .p-x").click(function () {
        $(".sld6 .s1-1 .popup").fadeOut(500);
    })
    $(".sld6 .s1-1 .x").click(function () {
        $(".sld6 .s1-1").fadeOut(500);
        $(".sld6 .s1").fadeIn(500);
        $(".sld6 .s1-1 .good-item .img").removeClass('animated zoomIn');
        setTimeout(function () {
            $(".sld6 .s1 .list").addClass('list-anim');
            $(".sld6 .s1-1 .list").removeClass('list-anim');
        }, 600);
    })

    $(".sld6 .s1 .plus-3d").click(function () {
        $(".sld6 .s1").fadeOut(500);
        $(".main-m").fadeOut(500);
        $(".sld6 .s1-2").fadeIn(500);
        $(".sld6 .s1-2 .good-item .img").addClass('animated zoomIn');
        setTimeout(function () {
            $(".sld6 .s1-2 .list").addClass('list-anim');
            
        }, 1000);
        setTimeout(function () {
            $(".sld6 .s1 .list").removeClass('list-anim');
        }, 600);
    })
    $(".sld6 .s1-2 .plus-result").click(function () {
        $(".sld6 .s1-2 .popup-1").fadeIn(500);
    })
    $(".sld6 .s1-2 .popup-1 .p-x").click(function () {
        $(".sld6 .s1-2 .popup-1").fadeOut(500);
    })
    $(".sld6 .s1-2 .plus-relief").click(function () {
        $(".sld6 .s1-2 .popup-2").fadeIn(500);
    })
    $(".sld6 .s1-2 .popup-2 .p-x").click(function () {
        $(".sld6 .s1-2 .popup-2").fadeOut(500);
    })
    $(".sld6 .s1-2 .x").click(function () {
        $(".sld6 .s1-2").fadeOut(500);
        $(".sld6 .s1").fadeIn(500);
        $(".sld6 .s1-2 .good-item .img").removeClass('animated zoomIn');
        setTimeout(function () {
            $(".sld6 .s1 .list").addClass('list-anim');
            $(".sld6 .s1-2 .list").removeClass('list-anim');
        }, 600);
    })
});