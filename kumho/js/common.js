/*

    파일명: common.js
    작성자: 윤서하
    작성일: 24.02.28
    설  명: 모든페이지에서 작동되는 jquery(header,footer)
    
*/


$(document).ready(function(){

    /*****************************************
    브라우저가 스크롤이 되면 header fixed 클래스 추가
    근데 맨위로 다시 올라가면 header에 fixed 클래스 삭제 
    ******************************************/
    let scrolling
    function scroll_chk(){
        scrolling = $(window).scrollTop()
        if(scrolling > 0){ // 조금이라도 스크롤 함
            $('.header').addClass('fixed')
        }else{ // 스크롤 안한경우(맨위)
            $('.header').removeClass('fixed')
        }
    }

    scroll_chk() //문서로드되었을때 1번 실행

    $(window).scroll(function(){
        scroll_chk()
    })

    /*****************************************************
    pc버전 메뉴에 마우스를 올리면 header에 menu_over 클래스 추가
    이벤트 대상 : .header .gnb
                 .header .gnb ul.depth1 > li
                 .header .gnb ul.depth1 > li > a
    1차메뉴 li에 마우스를 오버하면 해당 li에 on 클래스 추가 
    이벤트 대상 : .header .gnb ul.depth1 > li
                 .header .gnb ul.depth1 > li > a
    이전에 마우스를 오버했던 li에는 on클래스삭제
    ---> 이전에 오버했던 대상을 찾는 것보다.. 모든 li에 on을 삭제하고 
         마우스를 오버한 li에만 클래스 추가
    *********************************************************/
    let device_status
    function device_chk(){
        window_w = $(window).width()
        if(window_w > 1024){
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        console.log(device_status)
    }

    device_chk()

    $(window).resize(function(){
        device_chk()
    })


    $('.header .gnb ul.depth1 > li').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $('.header').addClass('menu_over')
            $('.header .gnb ul.depth1 > li').removeClass('on')
            $(this).addClass('on')
        }
    })

    $('.header').on('mouseleave', function(){
        if(device_status == 'pc'){
            $('.header').removeClass('menu_over')
            $('.header .gnb ul.depth1 > li').removeClass('on')
        }
    })

    $('.header .tnb .lang').on('focusin', function(){
        if(device_status == 'pc'){
            $('.header').removeClass('menu_over')
            $('.header .gnb ul.depth1 > li').removeClass('on')
        }
    })

    $('.header .gnb ul.depth1 > li > a').on("click", function(e){
        if(device_status == 'pc'){
            e.preventDefault();
            $(this).parent().toogleClass('on')
        }
    });

    $('.header .gnb .gnb_open').on('click', function(){
        $('.header').addClass('menu_open')
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
    })
    $('.header .gnb .gnb_close').on('click', function(){
        $('.header').removeClass('menu_open')
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
    })



})//$(document).ready






