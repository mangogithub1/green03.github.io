/* 퀵메뉴 */
var quick = $('#quick'),
    quick_li = quick.find('li'),
    quick_a = quick_li.find('a');
    
var publishing_sec = $('#publishing'),
    publishing_oft = publishing_sec.offset().top,
    publishing_li = publishing_sec.find('li'),
    border_box = publishing_li.find('.border-box');

quick_a.each(function(){
    var $this = $(this);

    $this.click(function(e){
        e.preventDefault();
        var quick_index = $(this).parent('li').index();

        $('html, body').animate({
            scrollTop: publishing_oft
        },300);

        publishing_li.removeClass('border');

        publishing_li.eq(quick_index).addClass('border');
    });
});



/* 열기, 닫기버튼 */

//프로필 더보기 팝업
var add_profile = $('#add-profile'),
    add_profile_open_btn = $('.add-profile-l, .add-profile-r'),
    add_profile_exit_btn = add_profile.find('.exit');

    add_profile_exit_btn.click(function(e){
        e.preventDefault();
        close(add_profile);
    });

    add_profile.click(function(){
        close(add_profile);
    });

    add_profile_open_btn.each(function(){
        $(this).click(function(e){
            e.preventDefault();
            open(add_profile);
        });
    });


//디자인 모달 팝업
var design_modal = $('#design-modal'),
    design_modal_li = $('#design .slide-frame li a'),
    design_modal_exit_btn = design_modal.find('.exit'),
    design_modal_img = design_modal.find('img');

var win_h = $(window).height();
    console.log(win_h)

    design_modal_li.each(function(){
        
        $(this).click(function(e){
            e.preventDefault();
            
            var full_img = $(this).find('img').attr('data-fullImg');
            open(design_modal);
            design_modal_img.attr('src', full_img);

            console.log(design_modal_img.height());

            /* if(design_modal_img.height()< win_h){
                design_modal_img.css({
                    bottom: '0px',
                    margin: 'auto 0'
                });
            } */
        });
    });

    design_modal_exit_btn.click(function(e){
        e.preventDefault();
        close(design_modal);
    });

    design_modal.click(function(){
        close(design_modal);
    });


function open(el){
    el.removeClass('dis-n');
    el.addClass('dis-b');
}

function close(el){
    el.removeClass('dis-b');
    el.addClass('dis-n');
}



/* nav 스크롤 */
var nav = $('#nav'),
    nav_a = nav.find('a');
    about_me = nav.find('li.item1'),
    portfolio = nav.find('li.item2'),
    contact = nav.find('li.item4');

var about_me_sec = $('#about'),
    portfolio_sec = $('#publishing'),
    contact_sec = $('#contact'),
    about_me_oft = about_me_sec.offset().top,
    portfolio_oft = portfolio_sec.offset().top,
    contact_oft = contact_sec.offset().top;

about_me.click(function(e){
    e.preventDefault();
    targetScroll(about_me_oft);
});

portfolio.click(function(e){
    e.preventDefault();
    targetScroll(portfolio_oft);
});

contact.click(function(e){
    e.preventDefault();
    targetScroll(contact_oft);
});

function targetScroll(oft){
    $('body, html').animate({
        scrollTop: oft
    },300);
}



/* #banner 타이핑 효과 */
$('#banner .text .item1 span').typed({
    strings: ['<span class="txt1">ㅅㅇㅈ</span>', '<span class="txt2">사용자</span>'],
    typeSpeed: 500,
    backDelay: 800,
    loop: true,
    showCursor: false,
    startDelay: 2200
});

$('#publishing .slide-frame').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    arrows: false,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                arrows: false,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1000,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        }
    ]
});



/* #design 슬라이드 */
$('#design .slide-frame').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    arrows: false,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                arrows: false,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
            }
        }
    ]
});

//좌우버튼 연결
$('#design .slide-intro .prev').click(function(){
    $('#design .slide-frame').slick('slickPrev');
});

$('#design .slide-intro .next').click(function(){
    $('#design .slide-frame').slick('slickNext');
});

//현재 슬라이드 번호 출력
var slide_wrapper = $('#design'),
    current_num = slide_wrapper.find('.current-num'),
    total_num = slide_wrapper.find('.total-num');

$('#design .slide-frame').on('afterChange', function(event, slick, currentSlide, nextSlide){
    current_num.empty();
    current_num.append(currentSlide + 1);
});

