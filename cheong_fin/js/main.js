$(document).ready(function(){
    let device_status
    let window_w
    function device_chk(){
        window_w = $(window).width()
        if(window_w > 768){
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
    //window_w


})