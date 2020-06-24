$(window).scroll(function() {
    var banner = $(".banner");
    var bannerOffset = banner.offset();

    if(window.pageYOffset > bannerOffset.top){
        $("header").addClass('fixed');
    }else{
        $("header").removeClass('fixed');
    }
});

$('header .btn').click(function(){
    $('header .btn span').addClass('animate');
    $('header nav .header .close span').removeClass('animate');
    $('nav').addClass('open');
});

$('header nav .header .close').click(function(){
    $('header nav .header .close span').addClass('animate');
    $('header .btn span').removeClass('animate');
    $('nav').removeClass('open');
});

$(document).ready(function () {
    $('.hp-banner .slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        speed: 1250,
        fade: false,
        arrows: false,
    });
});