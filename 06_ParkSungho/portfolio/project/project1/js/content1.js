//매인 슬라이드
$(function() {
    var visual = $('.slide>ul.slideUl>li');
    var current = 0;
    var setIntervalId;
    var leftBtn = $('.btnImg .prev');
    var rightBtn = $('.btnImg .next');
    timer();

    function timer() {
        setIntervalId = setInterval(function() {
            var prev = visual.eq(current);
            move(prev, 0, '-100%');
            current++;
            if (current == visual.length) { current = 0 }
            var next = visual.eq(current);
            move(next, '100%', 0);
        }, 3000);
    }

    function move(target, start, end) {
        target.css('left', start).stop().animate({ left: end }, 500)
    }
    rightBtn.click(function() {
        var prev = visual.eq(current);
        move(prev, 0, '-100%');
        current++;
        if (current == visual.length) { current = 0 }
        var next = visual.eq(current);
        move(next, '100%', 0);
    });
    console.log(length);
    leftBtn.click(function() {
        var prev = visual.eq(current);
        move(prev, 0, "100%");
        current--;
        console.log(length);
        if (current == -visual.length - 3) { current = 0 }
        var next = visual.eq(current);
        move(next, "-100%", "0");
    });
})