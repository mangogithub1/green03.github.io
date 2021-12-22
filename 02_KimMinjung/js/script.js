$(function () {
	var header = $(".page-header"),
		headerOST = header.offset().top + header.outerHeight()
	var win = $(window)

	var headerClone = header.contents().clone()
	var headerCloneContainer = $('<div class="page-header-clone"></div>')
	headerCloneContainer.append(headerClone)
	headerCloneContainer.appendTo("body")

	win.scroll(function () {
		if (win.scrollTop() > headerOST) {
			headerCloneContainer.addClass("visible")
		} else {
			headerCloneContainer.removeClass("visible")
		}
	})

	/* hidden */
	$(".hidden2").hover(
		function () {
			var ah = $(this).innerHeight()
			var img = $(this).find("img")
			var imgh = img.innerHeight() - 295
			img.stop().animate({ top: ah - imgh }, 3000)
		},
		function () {
			var img = $(this).find("img")
			img.stop().animate({ top: 0 }, 3000)
		}
	)
})
$(function () {
	var charts = $(".charts")
	var chart = $(".chart")
	var chartOST = chart.offset().top - 700

	$(window).scroll(function () {
		var currentSCT = $(this).scrollTop()
		if (currentSCT >= chartOST) {
			if (!charts.hasClass("active")) {
				progressAnimation()
				charts.addClass("active")
			}
		}
	})

	function progressAnimation() {
		chart.each(function () {
			var $this = $(this),
				title = $this.find("h2"),
				targetNum = title.attr("data-num"),
				circle = $this.find("circle")

			$({ rate: 0 }).animate(
				{ rate: targetNum },
				{
					duration: 1500,
					progress: function () {
						var now = this.rate
						var amount = 436 - (436 * now) / 100
						title.text(Math.floor(now) + "%")
						circle.css({ strokeDashoffset: amount })
					},
				}
			)
		})
	}
})

var target = $(".target"),
	targetContent = target.find(".content"),
	targetOST = target.offset().top
$(window).scroll(function () {
	var currentSCT = $(this).scrollTop()

	if (currentSCT > targetOST - 340) {
		target.addClass("active")
		if (currentSCT >= targetOST + 620) {
			target.removeClass("active")
			target.css({
				paddingTop: "930px",
				paddingBottom: "0px",
			})
		}
	} else {
		target.removeClass("active")
		target.css({
			paddingTop: "0px",
			paddingBottom: "930px",
		})
	}
})
/* slide */
$(function () {
	var visual = $(".slide>ul.slideUl>li")
	var current = 0
	var setIntervalId
	var leftBtn = $(".btnImg .prev")
	var rightBtn = $(".btnImg .next")
	var button = $(".buttonList>li")
	var check = false
	var interval=1000

	function move(target, start, end) {
		target.css("left", start).stop().animate({ left: end }, interval)
	}
	rightBtn.click(function () {
		console.log("a")
		var prev = visual.eq(current)
		var prevBtn = button.eq(current)
		move(prev, 0, "-100%")
		prevBtn.removeClass("on")
		current++
		if (current == visual.length) {
			current = 0
		}
		var next = visual.eq(current)
		var nextBtn = button.eq(current)
		move(next, "100%", 0)
		nextBtn.addClass("on")
		return false
	})
	leftBtn.click(function () {
		var prev = visual.eq(current)
		var prevBtn = button.eq(current)
		move(prev, 0, "100%")
		prevBtn.removeClass("on")
		current--
		if (current == -visual.length) {
			current = 0
		}
		var next = visual.eq(current)
		var nextBtn = button.eq(current)
		move(next, "-100%", "0")
		nextBtn.addClass("on")
		return false
	})
	button.click(function () {
		var tg = $(this)
		var i = tg.index()
		button.removeClass("on")
		tg.addClass("on")
		move1(i)
	})

	function move1(i) {
		if (current == i) return
		var currentEl = visual.eq(current)
		var nextEl = visual.eq(i)
		currentEl.css("left", "0").stop().animate({ left: "-100%" }, interval)
		nextEl.css("left", "100%").stop().animate({ left: "0%" }, interval)
		current = i
	}
	setIntervalId = setInterval(clickB, interval)
	
	function clickB() {
		if (!check) {
			rightBtn.trigger("click")
			check=true;
		}else{
			check=false;
		}
	}
	$(".slide").hover(
		function () {
			clearInterval(setIntervalId)
		},
		function () {
			setInterval(clickB, 3000)
		}
	)
})
