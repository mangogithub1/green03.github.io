$(function(){
    /* 텍스트 효과 */
    $('.ptitle').typed({
        strings:['<span class="txt1">유연한 웹 퍼블리셔</span>','<span class="txt2">영상편집도 되는 디자이너</span>'],//블럭요소말고 인라인요소로 넣기(span)
        typeSpeed:150,
        backDelay:200,
        loop:true,
        showCursor:true,
        cursorChar:'???', //커서 모양 지정
        startDelay:1200
    })
    $('.ptitle1').typed({
        strings:['<span class="txt1">유연한 웹 퍼블리셔</span>','<span class="txt2">영상편집도 되는 디자이너</span>'],//블럭요소말고 인라인요소로 넣기(span)
        typeSpeed:150,
        backDelay:200,
        loop:true,
        showCursor:true,
        cursorChar:'???', //커서 모양 지정
        startDelay:2200
    })
    
    /* 프로필 롤링 */
    var work=$('.work>li'),
        currentWork=0;
        setInterval(function(){
            var preW=work.eq(currentWork); //0
            movework(preW,0,'-100%')
            currentWork++;
            if(currentWork==work.size()){
                currentWork=0
            }
            var nextW=work.eq(currentWork); //1
            movework(nextW,'100%','0')
        },3000)
        
        function movework(tg,start,end){ //movework(tg,start,end)
            tg.css('top',start).stop().animate({top:end},500); //대상.css('top',출발위치).stop().animate({top:도착위치},500);
        }

    /* 프로필 롤링 */
    var company=$('.company>li'),
        currentComp=0;
        setInterval(function(){
            var preC=company.eq(currentComp); //0
            movecomp(preC,0,'-100%')
            currentComp++;
            if(currentComp==company.size()){
                currentComp=0
            }
            var nextC=company.eq(currentComp); //1
            movecomp(nextC,'100%','0')
        },3000)
        
        function movecomp(tg,start,end){ //movecomp(tg,start,end)
            tg.css('top',start).stop().animate({top:end},500); //대상.css('top',출발위치).stop().animate({top:도착위치},500);
        }
    
    /* webstd */
    $(window).scroll(function(){
        var sct=$(window).scrollTop();
        webstd=$('.project_move_wrap_ver1').offset().top;
        if(sct>webstd-550){ //애니메이트 실행속도보다 스크롤속도가 상대적으로 빠르기 때문에, -스크롤값을 줘서 사용자의 경험을 맞춰준다
            $('.project_move_img_ver1').stop().animate({left:'10px'},700)
            $('.project_move_info_ver1').stop().animate({right:'10px'},700)
        }else{
            $('.project_move_img_ver1').stop().animate({left:'-600px'},700)
            $('.project_move_info_ver1').stop().animate({right:'-600px'},700)
        }
    })

    /* webstd_hidden - webstd mockup img move */
    $('.move_inner').hover(
        function(){ //마우스를 올렸을때
            var ah=$(this).innerHeight();
            var img=$(this).find('img');
            var imgh=img.innerHeight();

            img.stop().animate({top:ah-imgh},3000)

        },function(){ //마우스가 빠져나왔을때
            var img=$(this).find('img');
            img.stop().animate({top:0},3000)
        }
    )
    $('.move_inner2').hover(
        function(){ //마우스를 올렸을때
            var ah=$(this).innerHeight();
            var img=$(this).find('img');
            var imgh=img.innerHeight();

            img.stop().animate({top:ah-imgh},3000)

        },function(){ //마우스가 빠져나왔을때
            var img=$(this).find('img');
            img.stop().animate({top:0},3000)
        }
    )

    /* fadein_animate */
    $(window).scroll(function(){
        var sct=$(window).scrollTop(),
        fade_tg_sec4=$('#main_sec4').offset().top;
        fade_tg_sec5=$('#main_sec5').offset().top;
        fade_tg_sec6=$('#main_sec6').offset().top;
        fade_tg_sec7=$('#main_sec7').offset().top;
        fade_tg_sec8=$('#main_sec8').offset().top;
        if(sct > fade_tg_sec4 - 350){
            $('.project1_info_fade1').fadeIn(800);
            $('.project1_info_fade2').slideDown(800);
        }
        if(sct > fade_tg_sec5 - 350){
            $('.project2_info_fade1').fadeIn(800);
            $('.project2_info_fade2').slideDown(800);
        }
        if(sct > fade_tg_sec6 - 350){
            $('.project3_info_fade1').fadeIn(800);
            $('.project3_info_fade2').slideDown(800);
        }
        if(sct > fade_tg_sec7 - 350){
            $('.project4_info_fade1').fadeIn(800);
            $('.project4_info_fade2').slideDown(800);
        }
        if(sct > fade_tg_sec8 - 350){
            $('.project5_info_fade1').fadeIn(800);
            $('.project5_info_fade2').slideDown(800);
        }
    })

    /* jquery_hidden02 - jquery mockup img move */
    $('.hidden02').hover(
        function(){ //마우스를 올렸을때
            var ah=$(this).innerHeight();
            var img=$(this).find('img');
            var imgh=img.innerHeight();

            img.stop().animate({top:ah-imgh},3000)

        },function(){ //마우스가 빠져나왔을때
            var img=$(this).find('img');
            img.stop().animate({top:0},3000)
        }
    )

    /* design */
    var gallery=$('.tab_content ul li');
        gallery.find('.hover').hide();
        gallery.hover(
            function(){
                var tg=$(this)
                var ti=tg.find('.hover');
                ti.fadeIn(300)
            },function(){
                var tg=$(this)
                var ti=tg.find('.hover');
                ti.fadeOut(300);
            }
        );

        /* tab_button */
        $("#btn01").click(function(){
            $('html,body').animate({scrollTop:$('#main_sec1').offset().top},500)
        });

        $("#btn02").click(function(){
            $('html,body').animate({scrollTop:$('#main_sec2').offset().top},500)
        });

        $("#btn03").click(function(){
            $('html,body').animate({scrollTop:$('#main_sec3').offset().top},500)
        });

        $("#btn04").click(function(){
            $('html,body').animate({scrollTop:$('#main_sec4').offset().top},500)
        });
        $("#btn05").click(function(){
            $('html,body').animate({scrollTop:$('#main_sec5').offset().top},500)
        });
        $("#btn06").click(function(){
            $('html,body').animate({scrollTop:$('#main_sec6').offset().top},500)
        });
        $("#btn07").click(function(){
            $('html,body').animate({scrollTop:$('#main_sec7').offset().top},500)
        });

        $("#btn08").click(function(){
            $('html,body').animate({scrollTop:$('#main_sec8').offset().top},500)
        });
        $("#btn09").click(function(){
            $('html,body').animate({scrollTop:$('#footer').offset().top},500)
        });

        /* top_menu move */
        var menu = $(".header_nav_ul>li");
        var contents=$('#main>div')
        var btn=$('#floatdiv ul li')
        menu.click(function(e){
            e.preventDefault();
            var tg=$(this);
            var i=tg.index();
            var section=contents.eq(i);
            var tt=section.offset().top;
            $("html,body").animate({scrollTop: tt},800)
            menu.removeClass('on');
            tg.addClass('on');
        });

        /* scroll light move */
        $(window).scroll(function(){
            var sct=$(window).scrollTop();
            contents.each(function(){
                var tg=$(this);
                var i=tg.index();
                if(tg.offset().top <= sct){
                    menu.removeClass('on');
                    menu.eq(i).addClass('on');
                    btn.removeClass('active');
                    btn.eq(i).addClass('active');
                }
            })
        })
});