$(function(){
    $('.ptitle').typed({
        strings:['<span class="txt1">유연한 웹퍼블리셔</span>','<span class="txt2">영상편집도 되는 디자이너</span>'],
        typeSpeed:150,
        backDelay:200,
        loop:true,
        showCursor:true,
        cursorChar:'???',
        startDelay:1200
    })
    $('.ptitle1').typed({
        strings:['<span class="txt1">유연한 웹퍼블리셔</span>','<span class="txt2">영상편집도 되는 디자이너</span>'],
        typeSpeed:150,
        backDelay:200,
        loop:true,
        showCursor:true,
        cursorChar:'|',
        startDelay:2200
    })
/* 프로필 롤링 */
    var work=$('.work>li'),
    currentWork=0;
    setInterval(function(){
        var preW=work.eq(currentWork);
        movework(preW,0,'-100%')
        currentWork++;
        if(currentWork==work.size())
        {currentWork=0}
        var nextW=work.eq(currentWork);
        movework(nextW,'100%','0')
    },3000)    

    function movework(tg,start,end){
        tg.css("top",start).stop().animate({top:end},500);
    }

/* 프로필 롤링 */
    var company = $('.company>li'),
    currentComp = 0;
    setInterval(function(){
        var preC=company.eq(currentWork);
        movecomp(preW,0,'-100%')
        currentComp++;
        if(currentComp==work.size())
        {currentComp = 0;}
        var nextC=company.eq(currentComp);
        movecomp(nextC,'100%','0')
    },3000)    

    function movecomp(tg,start,end){
        tg.css("top",start).stop().animate({top:end},500);
    }

/* webstd */
    $(window).scroll(function(){
        var sct=$(window).scrollTop(),
        webstd=$('#webstd').offset().top;
        if(sct>webstd-550){
            $('.webstd_left').stop().animate({left:'10px'},1000)
            $('.webstd_right').stop().animate({right:'10px'},1000)
        }else{
            $('.webstd_left').stop().animate({left:'-600px'},1000)
            $('.webstd_right').stop().animate({right:'-600px'},1000)

        }
    })
/* hidden */
    $('.hidden').hover(
        function(){
            var ah=$(this).innerHeight();
            var img=$(this).find('img');
            var imgh=img.innerHeight();

            var img=$(this).find('img');
            img.stop().animate({top:ah-imgh},3000)
            
        },function(){
            var img=$(this).find('img');
            img.stop().animate({top:0},3000)
        }
    )

/* jquery */
    $(window).scroll(function(){
        var sct=$(window).scrollTop(),
        jquery=$('#jquery').offset().top;
        if(sct > jquery - 350){
            $('.jquery_text_one').fadeIn(1000);
            $('.jquery_text_two').slideDown(1000);
        }
    })        
    $('.hidden02').hover(
        function(){
            var ah=$(this).innerHeight();
            var img=$(this).find('img');
            var imgh=img.innerHeight();
            img.stop().animate({top:ah-imgh},3000)
        },function(){
            var img=$(this).find('img');
            img.stop().animate({top:0},3000)
        }
    ) 
/* 디자인 */
    var gallery=$('.tab_content ul li');
    gallery.find('.hover').hide();
    gallery.hover(
        function(){
            var tg=$(this);
            var ti=tg.find('.hover');
            ti.fadeIn(300);
    },function(){
        var tg=$(this);
        var ti=tg.find('.hover');
        ti.fadeOut(300);

    }
    );       

    $("#btn01").click(function(){
        $('html,body').animate({scrollTop:$('#main').offset().top},800);
    });
    $("#btn02").click(function(){
        $('html,body').animate({scrollTop:$('#profile').offset().top},800);
    });
    $("#btn03").click(function(){
        $('html,body').animate({scrollTop:$('#wdbstd').offset().top},800);
    });
    $("#btn04").click(function(){
        $('html,body').animate({scrollTop:$('#juery').offset().top},800);
    });
    $("#btn05").click(function(){
        $('html,body').animate({scrollTop:$('#main').offset().top},800);
    });
    $("#btn06").click(function(){
        $('html,body').animate({scrollTop:$('#bstrap').offset().top},800);
    });
    $("#btn07").click(function(){
        $('html,body').animate({scrollTop:$('#mobile').offset().top},800);
    });
    $("#btn08").click(function(){
        $('html,body').animate({scrollTop:$('#design').offset().top},800);
    });

    var menu = $(".menuWrap > ul>li");
    var contents=$("#contents>div");
    var btn=$('#floatdiv ul li');
    menu.click(function(e){
        e.preventDefault();
        var tg=$(this);
        var i=tg.index();
        var section=contents.eq(i);
        var tt=section.offset().top;
        $("html,body").animate({scrollTop:tt},800);
        menu.removeClass('on');
        tg.addClass('on');
    });
    $(window).scroll(function(){
        var sct=$(window).scrollTop();
        contents.each(function(){
            var tg=$(this);
            var i=tg.index();
            if(tg.offset().top <= sct ){
                menu.removeClass("on");
                menu.eq(i).addClass("on");
                btn.removeClass("active");
                btn.eq(i).addClass("active");
            }
        })
    })

    var tab_content=$('.tab_content'),li=tab_content.find('ul>li');
    li.each(function(){
        var tg=$(this);
        
        tg.click(function(){
            var tgi=tg.index();
            showModal(tgi);
            return false;
        })
    })
    function showModal(i){
        $('.modal').find('li').hide();
        $('.modal').show();
        $('.modal').find('li').eq(i).show();
        $(this).click(function(){
            $('.modal').hide();
            $('.modal').find('li').hide();

        })
    }
});