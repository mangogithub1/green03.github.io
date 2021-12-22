var btt=document.querySelector('#back-to-top');
var scrollAmount;
//스크롤이벤트추가
window.addEventListener('scroll',function(){
    scrollAmount=window.pageYOffset;
    if(scrollAmount > scrollAmount/4){
        btt.className='visible';

    }else{
        btt.classList.remove('visible');
    }
})
//클릭이벤트추가
btt.addEventListener('click',function(e){
    e.preventDefault();
var scrollInterval=setInterval(()=>{
    if(scrollAmount!=0){
        window.scrollBy(0,-55)
        console.log(scrollBy);
    }else{
        clearInterval(scrollInterval)
    }
},10);
})
/* 메인이미지,컨텐츠2.4.5,related_links */
