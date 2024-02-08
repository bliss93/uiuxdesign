$(document).ready(function(){
    let scrolling = $(window).scrollTop()
   
    function scroll_chk(){ //함수의 선언
        scrolling = $(window).scrollTop()
       //console.log(scrolling)
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

    let window_w
    let device_status
    let mobile_size = 640
    function device_chk(){
        window_w = $(window).width()//브라우저 넓이 저장
        if(window_w > mobile_size){ //pc버전
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        console.log(device_status)
    } //function device_chk
    
    device_chk()
    
    $(window).resize(function(){
        device_chk()
    })

    $('.header .gnb').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $('.header').addClass('menu_over')
        }
    })
    $('.header').on('mouseleave', function(){
        $('.header').removeClass('menu_over')
    })
    /* 메뉴 바로 뒤에는 로그인 버튼이 있음
       로그인 버튼에 포커스가 되면 메뉴의 오버상태를 해제 */
    $('.header .tnb .login').on('focusin', function(){
        $('.header').removeClass('menu_over')
    })

    /*모바일 메뉴 여닫기*/

    $('.header .gnb .gnb_open').on('click', function(){
        $('.header').addClass('menu_open')
    })

    $('.header .gnb .gnb_close').on('click', function(){
        $('.header').removeClass('menu_open')
    })

    
})//$(document).ready

