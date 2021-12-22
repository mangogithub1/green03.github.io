$(function () {
	var slideWrapper = $(".slide_wrapper"),
		slides = slideWrapper.find(".slides"),
		slide = slides.find("li"),
		currentIdx = 0,
		slideCount = slide.length,
		/* 슬라이드 너비 */
		slideWidth = 750,
		/* 슬라이드 간격 */
		slideMargin = 200,
		moveAmt,
		/* 보일 슬라이드 갯수 */
		maxSlides = 2,
		/* 반응형 슬라이드 간격 */
		responsiveMargin = 100,
		newSlides,
		newSlideWidth,
		prevBtn = slideWrapper.find(".prev"),
		nextBtn = slideWrapper.find(".next"),
		/* 페이저 */
		indicator = slideWrapper.find(".pager"),
		indicatorHTML = "";
		/* 슬라이드의 갯수 만큼 페이저 생성 */
	slide.each(function (i) {
		indicatorHTML += '<a href="#">' + (i + 1) + "</a>";
	});
	indicator.html(indicatorHTML);

	newSlideWidth = slideWidth;

	//복사본 생성하기 뒤에 5개추가
	slides.append(slide.clone().addClass("clone"));

	//복사본 생성하기 앞에 5개추가
	slides.prepend(slide.clone().addClass("clone"));

	//가로배열하기
	function slideLayout(sw, sm) {
		newSlides = $(".slide_wrapper li");
		moveAmt = sw + sm;

		newSlides.each(function (idx) {
			$(this).css({left: moveAmt * idx + "px", width: sw + "px"});
		});
	}
	slideLayout(slideWidth, slideMargin);

	// 중앙배치하기
	function setSlidePos() {
		var ulMoveAmt = -moveAmt * slideCount + "px";
		slides.css({transform: "translateX(" + ulMoveAmt + ")"});
	}
	setSlidePos();

	//좌우 버튼 슬라이드 작동하기
	nextBtn.click(function () {
		moveSlide(currentIdx + 1);
	});
	prevBtn.click(function () {
		moveSlide(currentIdx - 1);
	});

	// 슬라이드 이동 함수
	function moveSlide(num) {
		slides.stop().animate({left: moveAmt * -num + "px"}, 750, function () {
			if (currentIdx == slideCount || currentIdx == -slideCount) {
				slides.css({left: "0px"});
				currentIdx = 0;
			}
		});
		currentIdx = num;
	}
	indicator.find("a").click(function (e) {
		e.preventDefault();
		var ci = $(this).index();
		moveSlide(ci);
	}); //인디케이터 클릭으로 이동하기

	//자동슬라이드
	var timer = undefined;

	function autoSlide() {
		if (timer == undefined) {
			timer = setInterval(function () {
				moveSlide(currentIdx + 1);
			}, 3000);
		}
	}
	autoSlide();

	function stopSlide() {
		clearInterval(timer);
		timer = undefined;
	}
	slideWrapper.mouseenter(function () {
		stopSlide();
	});
	slideWrapper.mouseleave(function () {
		autoSlide();
	});

	//반응형 슬라이드
	$(window).resize(function () {

		if ($(this).width() < 700) {
			responsiveMargin = 20;
			newSlideWidth = (slides.width() - responsiveMargin * (maxSlides - 1)) / maxSlides;
		} else {
			newSlideWidth = slideWidth;
			responsiveMargin = slideMargin;
		}
		if ($(this).width() <= 500) {
			newSlideWidth = slides.width();
			responsiveMargin = 0;
		}
		slideLayout(newSlideWidth, responsiveMargin);
		setSlidePos();
	});
});


/* 팝업 */
$("#section8 .slides li a.slide1").click(function(e){
  e.preventDefault();
  $(".modal1").css("opacity","1");
  $(".modal1").css("z-index","999999");
  $(".modal1").fadeIn();
}); 
$(".modal1 .close").click(function(e){
  e.preventDefault();
  $(".modal1").css("opacity","0");
  $(".modal1").fadeOut();
});
$("#section8 .slides li a.slide2").click(function(e){
  e.preventDefault();
  $(".modal2").css("opacity","1");
  $(".modal2").css("z-index","999999");
  $(".modal2").fadeIn();
}); 
$(".modal2 .close").click(function(e){
  e.preventDefault();
  $(".modal2").css("opacity","0");
  $(".modal2").fadeOut();
});
$("#section8 .slides li a.slide3").click(function(e){
  e.preventDefault();
  $(".modal3").css("opacity","1");
  $(".modal3").css("z-index","999999");
  $(".modal3").fadeIn();
}); 
$(".modal3 .close").click(function(e){
  e.preventDefault();
  $(".modal3").css("opacity","0");
  $(".modal3").fadeOut();
});
$("#section8 .slides li a.slide4").click(function(e){
	e.preventDefault();
	$(".modal4").css("opacity","1");
	$(".modal4").css("z-index","999999");
	$(".modal4").fadeIn();
  }); 
  $(".modal4 .close").click(function(e){
	e.preventDefault();
	$(".modal4").css("opacity","0");
	$(".modal4").fadeOut();
  });
  $("#section8 .slides li a.slide5").click(function(e){
	e.preventDefault();
	$(".modal5").css("opacity","1");
	$(".modal5").css("z-index","999999");
	$(".modal5").fadeIn();
  }); 
  $(".modal5 .close").click(function(e){
	e.preventDefault();
	$(".modal5").css("opacity","0");
	$(".modal5").fadeOut();
  });
  $("#section8 .slides li a.slide6").click(function(e){
	e.preventDefault();
	$(".modal6").css("opacity","1");
	$(".modal6").css("z-index","999999");
	$(".modal6").fadeIn();
  }); 
  $(".modal6 .close").click(function(e){
	e.preventDefault();
	$(".modal6").css("opacity","0");
	$(".modal6").fadeOut();
  });
  $("#section8 .slides li a.slide7").click(function(e){
	e.preventDefault();
	$(".modal7").css("opacity","1");
	$(".modal7").css("z-index","999999");
	$(".modal7").fadeIn();
  }); 
  $(".modal7 .close").click(function(e){
	e.preventDefault();
	$(".modal7").css("opacity","0");
	$(".modal7").fadeOut();
  });