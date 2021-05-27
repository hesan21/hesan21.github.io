$(document).ready(function () {
console.log("e");
    // Immediately Invoked. 
    // This will make sure whenever screen reloaded
    (function(){
        var scroll = $(window).scrollTop();
        // if($(window).width() > 992){
            if (scroll > 70) {
                $(".navbar").css("background" , "#131821")
            }
            else{
                $(".navbar").css("background" , "transparent")
            }
        // }
    })()

    $(window).scroll(function(){
        let scroll = $(window).scrollTop();

        // if($(window).width() > 992){
            if (scroll > 100) {
                $(".navbar").css("background" , "#131821")

            }else{
                $(".navbar").css("background" , "transparent")
            }
        // }
    })
});