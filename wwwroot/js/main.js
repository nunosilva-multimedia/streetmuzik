$(window).scroll(function() {
    var banner = $(".banner");
    var bannerOffset = banner.offset();

    if(window.pageYOffset > bannerOffset.top){
        $("header").addClass('fixed');
    }else{
        $("header").removeClass('fixed');
    }
});

$('header .navBtn').click(function(){
    $('header .navBtn').addClass('animate');
    $('nav').addClass('open');
});

$('nav .header .closeBtn').click(function(){
    $('header .navBtn').removeClass('animate');
    $('nav').removeClass('open');
});

let triggers = document.querySelectorAll('[data-toggle="dropdown"]');
let containers = document.querySelectorAll('.dropdown-menu');

for (var i = 0; i < triggers.length; i++) {

    triggers[i].onclick = function (e) {
        e.stopPropagation();

        let target = document.getElementById(this.dataset.target);

        for (var j = 0; j < containers.length; j++) {

            if (containers[j].id != this.dataset.target) {
                containers[j].style.display = 'none';
            }
        }

        if (target.style.display === 'none' || target.style.display === '') {
            $('nav > ul li .btn').toggleClass('rotate');
            $('nav > ul li > ul').toggleClass('open');
        }
    }
}

window.onclick = function () {
    for (var j = 0; j < containers.length; j++) {
        containers[j].style.display = 'none';
    }
}

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

    $('.news-banner .slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
});