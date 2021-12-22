/* 헤더 sticky */
var hd = $('#sticky-hd'),
    hd_height = hd.outerHeight(),
    win = $(window),
    logo = hd.find('.white');

win.scroll(function(){
if($(this).scrollTop() > hd_height){
    hd.addClass('sticky');
}else{
    hd.removeClass('sticky');
}
});