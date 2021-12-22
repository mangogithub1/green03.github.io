$(function() {
    var cnt = [0, 0, 0, 0]
    var slideWrap = $(".slide-wrap")
    var slides = slideWrap.find(".slide")
    var slideCount = slides.length
        /* 슬라이드너비 */
    var slideWidth = 100
        /* 슬라이드간격 */
    var slideMargin = 10
    var c = 0
    var moveAmt = slideWidth + slideMargin
    cnt[c] = 0
        /* 슬라이드정렬 */
    function slideLayout(sw, sm) {
        newSlides = $(".slide-wrap li")
        moveAmt = sw + sm

        newSlides.each(function(idx) {
            $(this).css({ left: moveAmt * idx + "px", width: sw + "px" })
        })
    }
    slideLayout(slideWidth, slideMargin)

    $(".tab-button").each(function(idx) {
            $(this).on({
                click: function() {
                    c = idx
                    pageEventFn(cnt[c])
                    $(".slide-view").stop().hide()
                    $(".slide-view").eq(c).stop().fadeIn()
                    $(".tab-button").removeClass("addTab")
                    $(this).addClass("addTab")
                },
            })
        })
        //pageEvent
    function pageEventFn(z) {
        if (z > slideCount) {
            z = 0
        }
        if (z < 0) {
            z = slideCount
        }
        $(".page-btn").removeClass("addPage")
        $(".page-btn").eq(z).addClass("addPage")
    }
    //페이지버튼 클릭이벤트
    $(".page-btn").each(function(idx) {
        $(this).on({
            click: function() {
                cnt[c] = idx
                mainSlideFn()
            },
        })
    })
})