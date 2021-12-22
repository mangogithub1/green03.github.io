$(document).ready(function () {
    $('.ptitle2').typed({
        strings: ['<span class="txt1">Web Artist.</span>'],
        typeSpeed: 300,   /* 타이핑속도 */
        backDelay: 2000,    /*백스페이스 속도 */
        loop: true,
        showCursor: true,
        cursorChar: '_',
        startDelay: 2000,  /* 시작 지연 */
    })
    $('.ptitle3').typed({
        strings: ['<span class="txt2">오세인 입니다.</span>'],
        typeSpeed: 300,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '_',
        startDelay: 4000,
    })

    /* menu */
    $("#menu>li:nth-child(2)").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(200);
    });
    $("#menu li:nth-child(2)").mouseout(function(){
        $(this).find(".submenu").stop().slideUp(200);
    });

    /* 배경 line svg */
    var li = $(".line")
    $(window).scroll(function () {
        var sc = Math.floor($(this).scrollTop());
        li.css("stroke-dashoffset", 21118 - (sc *2.1) + "px")
        console.log(li.css("stroke-dashoffset"))
    })

    /* section 스크롤내리면 양옆에서 나타나기 */
    $(window).scroll(function () {
        var sct = $(window).scrollTop(),
            section3 = $('#section3').offset().top;
            section5 = $('#section5').offset().top;
            section7 = $('#section7').offset().top;
            section4 = $('#section4').offset().top;
            section6 = $('#section6').offset().top;
            /* section = $('.section').offset().top; */
            console.log(section3 ,sct > section3 - 2000);
        if (sct > section3 - 1000) {
            $('#section3 .img_left').stop().animate({left: '-10px'}, 1000)
        } else {
            $('#section3 .img_left').stop().animate({left: '-70%'}, 1000)
        }
        if (sct > section5 - 500) {
            $('#section5 .img_left').stop().animate({left: '-10px'}, 1000)
        } else {
            $('#section5 .img_left').stop().animate({left: '-70%'}, 1000)
        }
        if (sct > section7 - 500) {
            $('#section7 .img_left').stop().animate({left: '-10px'}, 1000)
        } else {
            $('#section7 .img_left').stop().animate({left: '-70%'}, 1000)
        }
        if (sct > section4 - 500) {
            $('#section4 .img_right').stop().animate({right: '0px'}, 1000)
        } else {
            $('#section4 .img_right').stop().animate({right: '-70%'}, 1000)
        }
        if (sct > section6 - 500) {
            $('#section6 .img_right').stop().animate({right: '0px'}, 1000)
        } else {
            $('#section6 .img_right').stop().animate({right: '-70%'}, 1000)
        }
    })

    //hidden 숨겨진 이미지 스크롤_project1
    $('.hidden1').hover(
        function () {
            var ah = $(this).innerHeight();
            var img = $('.mobileFrame>img');
            var imgh = img.innerHeight();
            console.log(ah, imgh);
            img.stop().animate({top: ah-imgh+10}, 6000)
        },
        function () {
            var img = $('.mobileFrame>img');
            img.stop().animate({
                top: 0
            }, 3000)
        }
    );
    $('.hidden1_1').hover(
        function () {
            var ah = $(this).innerHeight();
            var img = $('.pcFrame>img');
            var imgh = img.innerHeight();
            console.log(ah, imgh);
            img.stop().animate({top: ah-imgh-60}, 6000)
        },
        function () {
            var img = $('.pcFrame>img');
            img.stop().animate({
                top: 0
            }, 3000)
        }
    );
    //hidden 숨겨진 이미지 스크롤_project2
    $('.hidden2').hover(
        function () {
            var ah = $(this).innerHeight();
            var img = $('.pcFrame>img');
            var imgh = img.innerHeight();
            console.log(ah, imgh);
            img.stop().animate({top: ah-imgh-420}, 6000)
        },
        function () {
            var img = $('.pcFrame>img');
            img.stop().animate({
                top: 0
            }, 3000)
        }
    );
    $('.hidden2_1').hover(
        function () {
            var ah = $(this).innerHeight();
            var img = $('.mobileFrame>img');
            var imgh = img.innerHeight();
            console.log(ah, imgh);
            img.stop().animate({top: ah-imgh-380}, 6000)
        },
        function () {
            var img = $('.pcFrame>img');
            img.stop().animate({
                top: 0
            }, 3000)
        }
    );

    //hidden 숨겨진 이미지 스크롤_project3
    $('.hidden_m').hover(
        function () {
            var ah = $(this).innerHeight();
            var img = $('#section5 .mobileFrame>img');
            var imgh = img.innerHeight();
            console.log(ah, imgh);
            img.stop().animate({top: ah-imgh}, 6000)
        },
        function () {
            var img = $('#section5 .mobileFrame>img');
            img.stop().animate({
                top: 0
            }, 3000)
        }
    );
    $('.hidden3').hover(
        function () {
            var ah = $(this).innerHeight();
            var img = $('#section5 .pcFrame>img');
            var imgh = img.innerHeight();
            img.stop().animate({top: ah-imgh-70}, 6000)
        },
        function () {
            var img = $('#section5 .pcFrame>img');
            img.stop().animate({
                top: 0
            }, 3000)
        }
    );
    //hidden 숨겨진 이미지 스크롤_project4
    $('.hidden4_1').hover(
        function () {
            var ah = $(this).innerHeight();
            var img = $('#section7 .mobileFrame>img');
            var imgh = img.innerHeight();
            console.log(ah, imgh);
            img.stop().animate({top: ah-imgh}, 10000)
        },
        function () {
            var img = $('#section7 .mobileFrame>img');
            img.stop().animate({
                top: 0
            }, 3000)
        }
    );
    $('.hidden4').hover(
        function () {
            var ah = $(this).innerHeight();
            var img = $('#section7 .pcFrame>img');
            var imgh = img.innerHeight();
            img.stop().animate({top: ah-imgh-220}, 10000)
        },
        function () {
            var img = $('#section7 .pcFrame>img');
            img.stop().animate({
                top: 0
            }, 3000)
        }
    );


});
document.addEventListener('DOMContentLoaded',function(){
    console.log(document.querySelector("#Layer_1 path").getTotalLength())

})