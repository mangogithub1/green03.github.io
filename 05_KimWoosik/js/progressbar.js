$(function(){
    var charts = $('.charts');
    var chart = $('.chart');
    var chartOST = chart.offset().top - 700;


    $(window).scroll(function(){
        var currentSCT = $(this).scrollTop();
        if(currentSCT >= chartOST){
            if(!charts.hasClass('active')){
                animateChart();
                charts.addClass('active');
            }
        }
    });



    function animateChart(){
        chart.each(function(){
            var item = $(this);
            var title = item.find('h5');
            var targetNum = title.attr('data-num');
            var circle = item.find('line');
    
            $({rate:0}).animate({rate:targetNum},
                {
                    duration:1500,
                    progress:function(){
                        var now = this.rate;
                        /* 선길이 */
                        var amount = 312 - (312*now/100);
                        
                        title.text(Math.floor(now)+'%');
                        circle.css({strokeDashoffset:amount});
                    }
            });
        }); //chart each
    }

});