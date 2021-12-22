$(function () {
  $(".ptitle").typed({
    strings: [
      '<span class="txt1">손재주 좋은 디자이너 여기있지</span>',
      '<span class="txt2">안녕하세요 안연지 입니다</span>',
    ],
    typeSpeed: 150,
    backDelay: 200,
    loop: true,
    showCursor: true,
    cursorChar: "~!!",
    startDelay: 1200,
  });

  /* webstd */
  $(window).scroll(function () {
    var sct = $(window).scrollTop(),
      webstd = $("#project").offset().top;
    if (sct > webstd - 550) {
      $(".project_left").stop().animate({ left: "10px" }, 1000);
      $(".project_right").stop().animate({ right: "10px" }, 1000);
    } else {
      $(".project_left").stop().animate({ left: "-600px" }, 1000);
      $(".project_right").stop().animate({ right: "-600px" }, 1000);
    }
  });

  /* hidden */
  $(".hidden").hover(
    function () {
      var ah = $(this).innerHeight();
      var img = $(this).find("img");
      var imgh = img.innerHeight();

      img.stop().animate({ top: ah - imgh }, 3000);
    },
    function () {
      var img = $(this).find("img");
      img.stop().animate({ top: 0 }, 3000);
    }
  );
  $(".hidden03").hover(
    function () {
      var ah = $(this).innerHeight();
      var img = $(this).find("img");
      var imgh = img.innerHeight();

      img.stop().animate({ top: ah - imgh }, 3000);
    },
    function () {
      var img = $(this).find("img");
      img.stop().animate({ top: 0 }, 3000);
    }
  );
  $(".hidden04").hover(
    function () {
      var ah = $(this).innerHeight();
      var img = $(this).find("img");
      var imgh = img.innerHeight();

      img.stop().animate({ top: ah - imgh }, 3000);
    },
    function () {
      var img = $(this).find("img");
      img.stop().animate({ top: 0 }, 3000);
    }
  );
  $(".hidden05").hover(
    function () {
      var ah = $(this).innerHeight();
      var img = $(this).find("img");
      var imgh = img.innerHeight();

      img.stop().animate({ top: ah - imgh }, 3000);
    },
    function () {
      var img = $(this).find("img");
      img.stop().animate({ top: 0 }, 3000);
    }
  );

  /* jquery */
  $(window).scroll(function () {
    var sct = $(window).scrollTop(),
      jquery = $("#project02").offset().top;
    if (sct > jquery - 350) {
      $(".jquery_text_one").fadeIn(1000);
      $(".jquery_text_two").slideDown(1000);
    }
  });

  $(".jquery_inner").hover(
    function () {
      var ah = $(this).innerHeight();
      var img = $(this).find("img");
      var imgh = img.innerHeight();

      img.stop().animate({ top: ah - imgh }, 3000);
    },
    function () {
      var img = $(this).find("img");
      img.stop().animate({ top: 0 }, 3000);
    }
  );

  $(".hidden02").hover(
    function () {
      var ah = $(this).innerHeight();
      var img = $(this).find("img");
      var imgh = img.innerHeight();

      img.stop().animate({ top: ah - imgh }, 3000);
    },
    function () {
      var img = $(this).find("img");
      img.stop().animate({ top: 0 }, 3000);
    }
  );

  /* 디자인 */
  var gallery = $(".tab_content ul li");
  gallery.find(".hover").hide();
  gallery.hover(
    function () {
      var tg = $(this);
      var ti = tg.find(".hover");
      ti.fadeIn(300);
    },
    function () {
      var tg = $(this);
      var ti = tg.find(".hover");
      ti.fadeOut(300);
    }
  );

  $("#btn01").click(function () {
    $("html,body").animate({ scrollTop: $("#main").offset().top }, 800);
  });
  $("#btn02").click(function () {
    $("html,body").animate({ scrollTop: $("#profile").offset().top }, 800);
  });
  $("#btn03").click(function () {
    $("html,body").animate({ scrollTop: $("#project").offset().top }, 800);
  });
  $("#btn04").click(function () {
    $("html,body").animate({ scrollTop: $("#project02").offset().top }, 800);
  });
  $("#btn05").click(function () {
    $("html,body").animate({ scrollTop: $("#project03").offset().top }, 800);
  });
  $("#btn06").click(function () {
    $("html,body").animate({ scrollTop: $("#uiux").offset().top }, 800);
  });
  $("#btn07").click(function () {
    $("html,body").animate({ scrollTop: $("#Video").offset().top }, 800);
  });
  $("#btn08").click(function () {
    $("html,body").animate({ scrollTop: $("#contactme").offset().top }, 800);
  });

  var menu = $(".menuWrap > ul>li");
  var contents = $("#contents>div");
  var btn = $("#floatdiv ul li");
  menu.click(function (e) {
    var tg = $(this);
    var i = tg.index();
    var section = contents.eq(i);
    var tt = section.offset().top;
    $("html,body").animate({ scrollTop: tt }, 800);
    menu.removeClass("on");
    tg.addClass("on");
  });
  $(window).scroll(function () {
    var sct = $(window).scrollTop();
    contents.each(function () {
      var tg = $(this);
      var i = tg.index();
      if (tg.offset().top <= sct) {
        menu.removeClass("on");
        menu.eq(i).addClass("on");
        btn.removeClass("active");
        btn.eq(i).addClass("active");
      }
    });
  });
  var btt = document.querySelector("#footer_btn");
  var scrollAmount;

  window.addEventListener("scroll", function () {
    scrollAmount = window.pageYOffset;
    if (scrollAmount > scrollAmount / 4) {
      btt.className = "visible";
    } else {
      btt.classList.remove("visible");
    }
  });

  btt.addEventListener("click", function (e) {
    e.preventDefault();
    var scrollInterval = setInterval(() => {
      if (scrollAmount != 0) {
        window.scrollBy(0, -75);
        console.log(scrollBy);
      } else {
        clearInterval(scrollInterval);
      }
    }, 10);
  });
});
$(function () {
  /* -------------skills---------------------------------------------------- */
  var progressWrap = $(".progress-bar"),
    animationOst = $(".animation").offset().top - 600,
    isAni = false;

  $(window).scroll(function () {
    if ($(window).scrollTop() >= animationOst && isAni == false) {
      progressAnimation();
    }
  });
  function progressAnimation() {
    progressWrap.each(function () {
      var $this = $(this),
        progressBar = $this.find(".bar"),
        progressText = $this.find(".rate"),
        progressRate = progressText.attr("data-rate");
      progressBar.animate({ width: progressRate + "%" }, 2500);
      var text = function () {
        $({ rate: 0 }).animate(
          { rate: progressRate },
          {
            duration: 2000,
            progress: function () {
              var now = this.rate;
              console.log(now);
              progressText.text(Math.floor(now) + "%");
            },
            complete: function () {
              isAni = true;
            },
          }
        );
      };
      text();
    });
  }

  /* -------------video---------------------------------------------------- */

  var mainVideo = $("#mainVideo");
  var vidH = mainVideo.innerHeight(); //비디오 높이
  var vidW = mainVideo.innerWidth(); //비디오 너비
  videoResizeFn();
  function videoResizeFn() {
    winH = $("#main").innerHeight();
    winW = $("#main").innerWidth();
    vidH = mainVideo.innerHeight();
    vidW = mainVideo.innerWidth();
    $(".section1-main-video").css({ width: 100 + "%", height: winH });
    if (winH > vidH) {
      mainVideo.css({ width: "auto", height: winH });
    }
    if (winW > vidW) {
      mainVideo.css({ width: winW, height: "auto" });
    }
    mainVideo.css({
      marginLeft: (winW - vidW) / 2,
      marginTop: (winH - vidH) / 2,
    });
  }
});
