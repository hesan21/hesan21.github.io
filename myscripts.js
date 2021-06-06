$(document).ready(function () {
    // Immediately Invoked. 
    // This will make sure whenever screen reloaded
    (function(){
        var scroll = $(window).scrollTop();
        if (scroll > 70) {
            $(".navbar").css("background" , "#131821")
        }
        else{
            $(".navbar").css("background" , "transparent")
        }
    })()

    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        if (scroll > 100) {
            $(".navbar").css("background" , "#131821")

        }else{
            $(".navbar").css("background" , "transparent")
        }

        if(scroll == 0 || scroll < 500){
            // $('.nav-item a').removeClass('active');
            $('#first-link').addClass('active');
        }else{
            $('#first-link').removeClass('active');
        }
    })

    $('.nav-item a').click(function(){
        $('.nav-item a').removeClass('active');
        $(this).addClass('active');
    });

    // Marquee Slideshow Configuration
    $(function () {
        $('.marquee').marquee({
            duration: 15000,
            gap: 00, 
            direction: 'left',
            duplicated: true,
            pauseOnHover: true
        });
    });
});