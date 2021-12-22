$(function(){
    $('.ptitle').typed({
        strings:['<span class="txt1">새롭게</span>','<span class="txt2">편리하게</span>'],
        typeSpeed:150,
        backDelay:200,
        loop:true,
        showCursor:false,
        startDelay:1200,
    })
     /* webstd */
     $(window).scroll(function(){
        var sct=$(window).scrollTop(),
        project=$('#project').offset().top;
        if(sct>project-550){
            $('.project_left').stop().animate({left:'10px'},1000);
            $('.project_right').stop().animate({right:'10px'},1000);
        }else{
            $('.project_left').stop().animate({left:'-600px'},1000);
            $('.project_right').stop().animate({right:'-600px'},1000);
        }
    })
     $(window).scroll(function(){
        var sct=$(window).scrollTop(),
        project=$('#project2').offset().top;
        if(sct>project-550){
            $('.project_left').stop().animate({left:'10px'},1000);
            $('.project_right').stop().animate({right:'10px'},1000);
        }else{
            $('.project_left').stop().animate({left:'-600px'},1000);
            $('.project_right').stop().animate({right:'-600px'},1000);
        }
    })
     $(window).scroll(function(){
        var sct=$(window).scrollTop(),
        project=$('#project3').offset().top;
        if(sct>project-550){
            $('.project_left').stop().animate({left:'10px'},1000);
            $('.project_right').stop().animate({right:'10px'},1000);
        }else{
            $('.project_left').stop().animate({left:'-600px'},1000);
            $('.project_right').stop().animate({right:'-600px'},1000);
        }
    })
    /* hidden */
    $('.hidden').hover(
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
    $('.hidden-m').hover(
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
            ti.fadeOut(100);
        })
        $('#btn01').click(function(){
            $('html,body').animate({scrollTop:$('#main').offset().top},800)
        })
        $('#btn02').click(function(){
            $('html,body').animate({scrollTop:$('#profile').offset().top},800)
        })
        $('#btn03').click(function(){
            $('html,body').animate({scrollTop:$('#project').offset().top},800)
        })
        $('#btn04').click(function(){
            $('html,body').animate({scrollTop:$('#mobile').offset().top},800)
        })
        $('#btn05').click(function(){
            $('html,body').animate({scrollTop:$('#design').offset().top},800)
        })
        $('#btn06').click(function(){
            $('html,body').animate({scrollTop:$('#contact').offset().top},800)
        })

        var menu=$('.menuWrap>ul>li');
        var contents=$('#contents>div');
        var btn=$('#floatdiv ul li')
        menu.click(function(e){
            
            e.preventDefault();
            var tg=$(this);
            var i=tg.index();
            var section=contents.eq(i);
            var tt=section.offset().top;
            $('html,body').animate({scrollTop:tt},700);
            menu.removeClass('on')
            tg.addClass('on')
        });
        $(window).scroll(function(){
            var sct=$(window).scrollTop();
            contents.each(function(){
                var tg=$(this);
                var i= tg.index();
                if(tg.offset().top <= sct){
                    menu.removeClass('on');
                    menu.eq(i).addClass('on');
                    btn.removeClass('active');
                    btn.eq(i).addClass('active');
                }
            })
        })

        var progressWrap=$('.progress-bar'),
        animationOst=$('.animation').offset().top-750;
        isAni=false;
    
        $(window).scroll(function() {
            if ($(window).scrollTop()>=animationOst && isAni==false) {
                progressAnimation()
            }
        })
        function progressAnimation() {
        progressWrap.each(function() {
            var $this=$(this),
            progressBar=$this.find('.bar'),
            progressText=$this.find('.rate'),
            progressRate=progressText.attr('data-rate');
           progressBar.animate({width:progressRate+'%'},2000);
           var text=function() {
               $({rate:0}).animate({rate:progressRate},{
                   duration:2000,
                   progress:function() {
                       var now=this.rate
                       progressText.text(Math.floor(now)+'%')
                   },
                   complete:function() {isAni=true;}
               },
               )
           }
           text();
            })
        }

})