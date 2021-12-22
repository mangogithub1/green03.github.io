$(function() {
    //탭버튼별 카운트 변수
    var cnt=[0,0,0];
    //슬라이드 너비
    var slideW=1440;
    //current 현재 슬라이드 변수
    var c=0;
    cnt[c]=0;
    //탭버튼 클릭이벤트
    $('.tab-button').each(function(idx){
        $(this).on({click:function() {
            c = idx;
            console.log(c,cnt);
            //슬라이드 탭버튼 별 그룹
            $('.slide-view').stop().hide();
            $('.slide-view').eq(c).stop().fadeIn();
            //탭버튼 활성화
            $('.tab-button').removeClass('addTab');
            $(this).addClass('addTab');
        }
     });
    });
    //메인 슬라이드 이동
    function mainSlideFn() {
        $('.slide-wrap').eq(c).stop().animate({
            //400 * 0 이 되면 움직이지 않을거임 , 400*1=400.. 순차적으로 한칸씩 움직임
            left:-(slideW*cnt[c])
        },1000,function() {
            if(cnt[c]>4){cnt[c]=0}
            if(cnt[c]<0){cnt[c]=4}
            $('.slide-wrap').eq(c).stop().animate({
                left:-(slideW*cnt[c])
            },0);
        });
        pageEventFn(cnt[c]);
    }
   
    /* 터치스와이프 */
    $('.slide-container').swipe({
        swipeLeft:function() {
            if(!$('.slide-wrap').eq(c).is(':animated')){
                nextCountFn();
            }
        }, swipeRight:function() {
            if(!$('.slide-wrap').eq(c).is(':animated')){
                prevCountFn();
        }
    }
    })









})