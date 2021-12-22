$(function () {
	$("#fullpage").fullpage({
		menu: "#menu",
		anchors: ["page1", "page2", "page3", "page4", "page5"],
		navigation: true,
		navigationPosition: "right",
		afterLoad: function (anchorLink, index) {
			if (anchorLink == "page1") {
				$(".section1").addClass("sectionIn");
			} else {
				$(".section1").removeClass("sectionIn");
			}
			if (anchorLink == "page4"){
				animateChart()
			}

		},
		//새로운 구역으로 이동하는 와중에 실행
		onLeave: function (origin, destination, direction) {
			if (destination > 1){
				$(".page5").css("color","#fff");
			}else{
				$(".page5").css("color","#8fd8ca");
			}
			if (destination == 5){
				$(".page5").css("color","#8fd8ca");
			}
			if (destination>1 && destination !== 4) {
                $("#menu>li").eq(3).addClass("on");
			} else{
                $("#menu>li").eq(3).removeClass("on");
            }
		},
	});
	$('.hidden').hover(function(){
		var ah=$(this).innerHeight();
		var img=$(this).find('img');
		var imgh=img.innerHeight();
		
		img.stop().animate({top:ah-imgh},3000);

	},function(){
		var img=$(this).find('img');
		img.stop().animate({top:0},3000);
	});

/* skill */
    var chart = $('.chart');

    function animateChart(){
        chart.each(function(){
            var item = $(this);
            var title = item.find('h2');
            var targetNum = title.attr('data-num');
            var circle = item.find('circle');
    
            $({rate:0}).animate({rate:targetNum},
                {
                    duration:1500,
                    progress:function(){
                        var now = this.rate;
                        var amount = 630 - (630*now/100);
                        
                        title.text(Math.floor(now));
                        circle.css({strokeDashoffset:amount});
                    }
            });
        }); //chart each
    }



});
