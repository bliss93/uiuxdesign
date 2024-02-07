$(document).ready(function(){ //브라우저가 작동될 때 한번
    /*mouseenter은 클릭해도 작동됨 pc버전용으로 만든코드가 모바일에서 작동됨 pc인지 모바일인지jquery에서 구분해서 pc에서만 작동되도록 제한
    css, jquery에서 브라우저 사이즈로만 모바일/pc를 구분*/ 
    let window_w = $(window).width() //브라우저 넓이
    let device_status = 'pc' //pc인지 모바일인지 현재상태를 저장하는 변수
    
    function device_chk(){ //함수를 선언한다.
        window_w = $(window).width()
        if(window_w > 640){ //pc
            device_status = 'pc'
        }else{//640이거나 640작은게 ---mobile
            device_status = 'mobile'
        }
        console.log(device_status)
    }//function

    device_chk() //함수의 실행


    $(window).resize(function(){ //브라우저 사이즈가 리사이즈 될때마다 한번 실행
        device_chk()
    }) //$(window).resize

    $('.header .gnb').on('mouseenter focusin ', function(){
        if(device_status == 'pc'){
            console.log('마우스올림')
            $('.header').addClass('menu_over')
        }
    })
    $('.header').on('mouseleave', function(){
        console.log('마우스내림')
        $('.header').removeClass('menu_over')
    })
    $('.header .gnb > ul > li:last-child > ul > li:last-child >a').on('mouseleave focusout', function(){
        console.log('마우스내림')
        $('.header').removeClass('menu_over')
    })

    $(".header .gnb ul.depth1 > li > a").on("click", function(e){
        if(device_status == 'mobile'){
            e.preventDefault();	/* a 태그의 href를 작동 시키지 않음 */
            $(this).parent().toggleClass('sub_open')
        }	
    });

    /*열기버튼을 누르면 header에 menu_open 클래스 추가
    닫기버튼을 누르면 header에 menu_open 클래스 닫기 */

    $('.header .gnb .gnb_open').on('click', function(){
        $('.header').addClass('menu_open')
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
    })
    $('.header .gnb .gnb_close').on('click', function(){
        $('.header').removeClass('menu_open')
    });
    $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});

})//$(document).ready

