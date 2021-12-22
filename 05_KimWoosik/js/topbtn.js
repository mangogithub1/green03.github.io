/*  @바닐라 자바스크립트@
    변수로 잡을것들
    1.탑버튼 -> var btt
    2.윈도우의 스크롤 탑값(문서가 수직으로 얼마나 스크롤 됐는지 픽셀단위로 반환) -> window.pageYOffset 사용해서 가져옴
    3.실시간으로 변하는 스크롤 양 -> scrollAmount
*/

var btt=document.querySelector('#back-to-top');
var scrollAmount

//스크롤이벤트추가
window.addEventListener('scroll',function(){
    scrollAmount=window.pageYOffset;
    //console.log(scrollAmount) // 콘솔에 찍어보면 스크롤 올리고 내릴때 마다 값이 바뀜
    if(scrollAmount > scrollAmount/4){
        btt.className='visible' // className:클래스 수정 / 위의 조건문이 만족되면 btt에 visible이라는 클래스가 붙음
        //btt.classList.add('visible','add') // classList.add: 클래스 추가
        //btt.classList.replace('visible','add1') // classList.replace: 클래스 변경
        //btt.classList.toggle('add3') // classList.toggle: 클래스가 붙었다 떨어졌다
    }else{
        btt.classList.remove('visible');
    }
})
//클릭이벤트추가
btt.addEventListener('click',function(e){
    e.preventDefault(); // e.preventDefault();로 a태그가 기본적으로 가지고 있는 속성을 제한한뒤 해야 먹힌다
    var scrollInterval=setInterval(() => {
        if(scrollAmount!=0){
            window.scrollBy(0,-55)
            console.log(scrollBy)
        }else{
            clearInterval(scrollInterval)
        }
    }, 10);
})
