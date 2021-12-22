$(function(){
    /* contents */
    $('#contents .container .container-btn a').click(function(e){
        e.preventdefault();
    })


    /* webstd */
    $(window).scroll(function(){
        var sct=$(window).scrollTop(),
            webstd=$('#webstd').offset().top;
        if(sct > webstd -550){
            $('.webstd_left').stop().animate({left: '10px'}, 1000);
            $('.webstd_right').stop().animate({right: '10px'}, 1000);
        }else{
            $('.webstd_left').stop().animate({left: '-600px'}, 1000);
            $('.webstd_right').stop().animate({right: '-600px'}, 1000);
        }
        if(sct > webstd -550){
            $('.webstd_left2').stop().animate({left: '420px'}, 800);
        }else{
            $('.webstd_left2').stop().animate({left: '-600px'}, 800);
        }
    })

    /* hidden */
    $('.hidden').hover(
        function(){
            var ah=$(this).innerHeight();
            var img=$(this).find('img');
            var imgh=img.innerHeight();
            img.stop().animate({top: ah-imgh}, 3000);
        },function(){
            var img=$(this).find('img');
            img.stop().animate({top: 0}, 3000);
        }
    )

    /* jquery */
    $(window).scroll(function(){
        var sct=$(window).scrollTop(),
            jquery=$('#jquery').offset().top;
            if(sct > jquery -350){
                $('.jquery_text_one').fadeIn(1000);
                $('.jquery_text_two').slideDown(1000);
            }else{
                $('.jquery_text_one').fadeOut(1000);
                $('.jquery_text_two').slideUp(1000);
            }
    })
    $('.hidden02').hover(
        function(){
            var ah=$(this).innerHeight();
            var img=$(this).find('img');
            var imgh=img.innerHeight();
            img.stop().animate({top: ah-imgh}, 3000);
        },function(){
            var img=$(this).find('img');
            img.stop().animate({top: 0}, 3000);
        }
    )
    $('.mo_hidden').hover(
        function(){
            var ah=$(this).innerHeight();
            var img=$(this).find('img');
            var imgh=img.innerHeight();
            img.stop().animate({top: ah-imgh}, 6000);
        },function(){
            var img=$(this).find('img');
            img.stop().animate({top: 0}, 3000);
        }
    )
    
    $('#response .hidden').hover(
        function(){
            var ah=$(this).innerHeight();
            var img=$(this).find('img');
            var imgh=img.innerHeight();
            img.stop().animate({top: ah-imgh}, 1000);
        },function(){
            var img=$(this).find('img');
            img.stop().animate({top: 0}, 1000);
        }
    )

    
    /* design */
    $('#design a').click(function(e){
        e.preventDefault();
    });
    $('#design .design01 a').click(function(e){
        $('#wrap_shadow div').hide();
        $('#wrap_shadow').show();
        $('#wrap_shadow .img1').show();
    });
    $('#design .design02 a').click(function(e){
        $('#wrap_shadow div').hide();
        $('#wrap_shadow').show();
        $('#wrap_shadow .img2').show();
    });
    $('#design .design03 a').click(function(e){
        $('#wrap_shadow div').hide();
        $('#wrap_shadow').show();
        $('#wrap_shadow .img3').show();
    });
    $('#design .design04 a').click(function(e){
        $('#wrap_shadow div').hide();
        $('#wrap_shadow').show();
        $('#wrap_shadow .img4').show();
    });
    $('#wrap_shadow').click(function(){
        $('#wrap_shadow').hide();
    });


    /* design tab_menu */
    $('#tab_menu ul li').click(function(){
        $('#tab_menu ul li').removeClass('active');
        $(this).addClass('active');
    });
    $('#tab_menu ul .all').click(function(){
        $('#design .design_cont .cont ul li').show();
        $('#design .design_cont .cont').css({'width':'1280px'});
    });
    $('#tab_menu ul .il').click(function(){
        $('#design .design_cont .cont ul li').hide();
        $('#design .design_cont .cont ul .il').show();
        $('#design .design_cont .cont').css({'width':'634px'});
        $('#design .design_cont .cont ul .design03').css({'margin-right':'0px'});
    });
    $('#tab_menu ul .ph').click(function(){
        $('#design .design_cont .cont ul li').hide();
        $('#design .design_cont .cont ul .ph').show();
        $('#design .design_cont .cont').css({'width':'634px'});
    });


    /* mobile */
    $('.mobile_cont .mobile_xdBtn1').click(function(e){
        $(this).addClass('active');
    })
    $('.mobile_cont .mobile_xdBtn2').click(function(e){
        $(this).addClass('active');
    })


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
    )
    
    $('#btn01').click(function(){
        $('html,body').animate({scrollTop: $('#main').offset().top},800);
    })
    $('#btn02').click(function(){
        $('html,body').animate({scrollTop: $('#profile').offset().top},800);
    })
    $('#btn03').click(function(){
        $('html,body').animate({scrollTop: $('#webstd').offset().top},800);
    })
    $('#btn04').click(function(){
        $('html,body').animate({scrollTop: $('#jquery').offset().top},800);
    })
    $('#btn05').click(function(){
        $('html,body').animate({scrollTop: $('#mobile').offset().top},800);
    })
    /* $('#btn06').click(function(){
        $('html,body').animate({scrollTop: $('#bstrap').offset().top},800);
    }) */
    $('#btn07').click(function(){
        $('html,body').animate({scrollTop: $('#design').offset().top},800);
    })
    $('#btn08').click(function(){
        $('html,body').animate({scrollTop: $('#response').offset().top},800);
    })
    

    var menu=$('.menuWrap>ul>li');
    var contents=$('#contents>div');
    var btn=$('#floatdiv ul li');
    var floatdiv=$('#floatdiv ul li');

    menu.click(function(e){
        e.preventDefault();
        var tg=$(this);
        var i=tg.index();
        var section=contents.eq(i);
        var tt=section.offset().top;
        $('html,body').animate({scrollTop: tt},800);
        menu.removeClass('on');
        tg.addClass('on');
    })
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
                floatdiv.removeClass('active');
                floatdiv.eq(i).addClass('active');
            }
        })
    })


    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 6000) {
            $('#response').addClass('active');
        } else {
            $('#response').removeClass('active');
        }
        console.log(scroll);
    });

});



$(function () {
    var charts = $(".charts");
    var chart = $(".chart");
    var chartOST = chart.offset().top - 700;
   
    progressAnimation();
    $(window).scroll(function () {
      var currentSCT = $(this).scrollTop();
      if (currentSCT >= chartOST) {
  
        if (!charts.hasClass("active")) {
          progressAnimation();
          charts.addClass("active");
        }
      }
    });
  
    function progressAnimation() {
      chart.each(function () {
        var $this = $(this),
          title = $this.find("h2"),
          targetNum = title.attr("data-num"),
          circle = $this.find("circle");
  
        $({ rate: 0 }).animate(
          { rate: targetNum },
          {
            duration: 1500,
            progress: function () {
              var now = this.rate;
              var amount = 628 - (628 * now) / 100;
              title.text(Math.floor(now) + "%");
              circle.css({ strokeDashoffset: amount });
            },
          }
        );
      });
    }
});
  