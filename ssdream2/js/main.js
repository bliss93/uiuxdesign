$(document).ready(function(){
    let scrolling = $(window).scrollTop()
   
    function scroll_chk(){ //함수의 선언
        scrolling = $(window).scrollTop()
        console.log(scrolling)
        if(scrolling > 0){
            $('.header').addClass('fixed')
        }else{
            $('.header').removeClass('fixed')
        }
    }
    scroll_chk() //함수의 호출

    $(window).scroll(function(){//브라우저가 스크롤 될때마다 1번만 실행
        scroll_chk() //브라우저가 스크롤 될때마다 1번만 실행
    })
})//$(document).ready