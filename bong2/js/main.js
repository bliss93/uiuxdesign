/*
    파일명 : main.js
    작성자 : 윤서하
    작성일 : 24.03.14
    설  명 : 메인페이지에서 사용된 jqeury (header 빼고)
*/
$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */
        effect: "fade", /* fade 효과 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 3000,
            disableOnInteraction: true,
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
                return '<span class="page' + (index + 1) + ' '+className+'"><span></span></span>';
            },
        },
    });



    const product_swiper = new Swiper('.product .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 20, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            1640: {
                slidesPerView: 6, /* 사이즈제한 */
                spaceBetween: 20,
            },
        },
 
        
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        autoplay: { 
        delay: 3000,
        disableOnInteraction: true,
        },

        navigation: {  /* 이전, 다음 버튼 */
        nextEl: '.product .next',  /* 다음 버튼의 클래스명 */
        prevEl: '.product .prev',  
        },
    
    })

    
    const social_swiper = new Swiper('.social .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 40, /* 팝업과 팝업 사이 여백 */
        loop: true,

        breakpoints: {
            
            1640: {
                slidesPerView: 3, /* 사이즈제한 */
                spaceBetween: 40,
            },
            
        },
        slidesOffsetBefore : 20,
        slideToClickedSlide : true,

        navigation: {  /* 이전, 다음 버튼 */
        nextEl: '.social .next',  /* 다음 버튼의 클래스명 */
        prevEl: '.social .prev',  
        },

    });
    

    AOS.init({
        offset: 100, // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
        duration: 500, // 애니메이션 효과가 작동되는 시간
        easing: 'ease', // 가속도
    });

})
