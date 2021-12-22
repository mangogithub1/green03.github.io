$(function () {
    $('.ptitle').typed({
        strings: ['<span class="txt1">웹페이지를 디자인하고 </span>', '<span class="txt2">영상편집도 되는 디자이너</span>'],
        typeSpeed: 150,
        backDelay: 200,
        loop: true,
        showCursor: true,
        cursorChar: '!',
        startDelay: 1200,
    })
    $('.ptitle1').typed({
        strings: ['<span class="txt1">모든것들을 다 잘하는</span>', '<span class="txt2">다 주영!</span>'],
        typeSpeed: 150,
        backDelay: 200,
        loop: true,
        showCursor: true,
        cursorChar: '!',
        startDelay: 2200,
    })
    /* webstd */
    $(window).scroll(function () {
        var sct = $(window).scrollTop(),
            webstd = $('#webstd').offset().top;
        if (sct > webstd - 550) {
            $('.webstd_left').stop().animate({ left: '10px' }, 1000)
            $('.webstd_right').stop().animate({ right: '10px' }, 1000)
        } else {
            $('.webstd_left').stop().animate({ left: '-600px' }, 1000)
            $('.webstd_right').stop().animate({ right: '-600px' }, 1000)
        }
        //console.log(webstd);
    })

    /* hidden */
    $('.hidden').hover(
        function () {
            var ah = $(this).innerHeight();
            var img = $(this).find('img');
            var imgh = img.innerHeight();
            //console.log(ah, imgh);

            img.stop().animate({ top: ah - imgh }, 3000)
        },
        function () {
            var img = $(this).find('img');
            img.stop().animate({ top: 0 }, 3000)
        }
    )

    /* jquery */
    $(window).scroll(function () {
        var sct = $(window).scrollTop(),
            jquery = $('#jquery').offset().top;
        if (sct > jquery - 350) {
            $('.jquery_text_one').fadeIn(1000);
            $('.jquery_btn').fadeIn(1000);
        }
    })

    /* hidden02 */
    $('.hidden02').hover(
        function () {
            var ah = $(this).innerHeight();
            var img = $(this).find('img');
            var imgh = img.innerHeight();
            //console.log(ah, imgh);

            img.stop().animate({ top: ah - imgh }, 3000)
        },
        function () {
            var img = $(this).find('img');
            img.stop().animate({ top: 0 }, 3000)
        }
    )
    $(window).scroll(function () {
        var sct = $(window).scrollTop(),
            mobile = $('#mobile').offset().top;
        if(sct>mobile -350){
            $('.mobile_text_one').fadeIn(1000);
        }
    })
    /* response */
    $(window).scroll(function () {
        var sct = $(window).scrollTop(),
            webstd = $('#response').offset().top;
        if (sct > webstd - 400) {
            $('.response_left').stop().animate({ left: '10px' }, 1000)
            $('.response_right').stop().animate({ right: '34px' }, 1000)
        } else {
            $('.response_left').stop().animate({ left: '-600px' }, 1000)
            $('.response_right').stop().animate({ right: '-600px' }, 1000)
        }
        //console.log(webstd);
    })

    /* floatdiv */

    $('#btn01').click(function () {
        $('html,body').animate({ scrollTop: $('#main').offset().top }, 800)
    })
    $('#btn02').click(function () {
        $('html,body').animate({ scrollTop: $('#profile').offset().top }, 800)
    })
    $('#btn03').click(function () {
        $('html,body').animate({ scrollTop: $('#webstd').offset().top }, 800)
    })
    $('#btn04').click(function () {
        $('html,body').animate({ scrollTop: $('#jquery').offset().top }, 800)
    })
    $('#btn05').click(function () {
        $('html,body').animate({ scrollTop: $('#response').offset().top }, 800)
    })
    $('#btn06').click(function () {
        $('html,body').animate({ scrollTop: $('#mobile').offset().top }, 800)
    })
    /* menu */
    var menu = $('.menuWrap>ul>li');
    var contents = $('#contents>div');
    var btn = $('#floatdiv ul li')
    console.log(menu, contents);
    menu.click(function (e) {
        e.preventDefault();
        var tg = $(this);
        var i = tg.index();
        var section = contents.eq(i);
        var tt = section.offset().top;
        $('html,body').animate({ scrollTop: tt }, 800);
        menu.removeClass('on');
        tg.addClass('on');
    })
    $(window).scroll(function () {
        var sct = $(window).scrollTop();
        contents.each(function () {
            var tg = $(this);
            var i = tg.index();
            if (tg.offset().top <= sct) {
                menu.removeClass('on');
                menu.eq(i).addClass('on');
                btn.removeClass('active');
                btn.eq(i).addClass('active');
            }
        })
    })
    /* bubble */
    function bubbleAnime() {
        //calculating random color of dream
        var color = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';

        //calculating random X position
        var x = Math.floor(Math.random() * window.innerWidth);

        //calculating random Y position
        var y = Math.floor(Math.random() * window.innerHeight);

        //creating the dream and hide
        bubble = document.createElement('span');
        bubble.className = 'bubble';
        bubble.style.top = y + 'px';
        bubble.style.left = x + 'px';
        bubble.style.backgroundColor = color;
        //remove element when animation is complete
        bubble.addEventListener("animationstart", function (e) {
            window.setTimeout(startBubble, 1000);
        }, false);

        bubble.addEventListener("animationend", function (e) {
            document.body.removeChild(this);
        }, false);

        document.body.appendChild(bubble);
    }
    function startBubble() {
        window.requestAnimationFrame(bubbleAnime);
    }
    startBubble()
    
    /* skill */
    var charts = $(".charts");
    var chart = $(".chart");
    var chartOST = chart.offset().top - 700;

    $(window).scroll(function () {
        var currentSCT = $(this).scrollTop()
        if (currentSCT >= chartOST) {
            if (!charts.hasClass('active')) {
                animateChart();
                charts.addClass('active')
            }
        }
    })
    function animateChart() {
        chart.each(function () {
            var item = $(this)
            var title = item.find("h2")
            var targetNum = title.attr("data-num")
            var circle = item.find("circle")
            
            $({ rate: 0 }).animate(
                { rate: targetNum },
                {
                    duration: 1500,
                    progress: function () {
                        var now = this.rate
                        var amount = 630 - (630 * now) / 100
                        title.text(Math.floor(now) + '%');
                        circle.css({ strokeDashoffset: amount });
                    }
                }
            )
        }) //chart each
    }
})
