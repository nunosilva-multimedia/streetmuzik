$(window).scroll(function() {
    var banner = $(".banner");
    var bannerOffset = banner.offset();

    if(window.pageYOffset > bannerOffset.top){
        $("header").addClass('fixed');
    }else{
        $("header").removeClass('fixed');
    }
});

$('header > .btn').click(function(){

    var tl = anime.timeline({
        targets: 'header > .btn'
      });
    
    tl.add({
        targets: 'header > .btn span',
        update: function(){
            $('header > .btn span').addClass('animate');
        },
        duration: 250
    }).add({
        targets: 'header > .btn span',
        update: function(){
            $('nav').addClass('open');
        },
        delay: 250
    }).add({
        update: function(){
            $('header nav .header > .close span.first').addClass('animate');
            $('header nav .header > .close span.second').addClass('animate');
        },
        delay: 250
    });

});

$('header nav .header .close').click(function(){
    
    var tl = anime.timeline({
        targets: 'header nav .header .close'
    });
    
    tl.add({
        update: function(){
            $('header nav .header > .close span.first').removeClass('animate');
            $('header nav .header > .close span.second').removeClass('animate');
        },
        duration: 100
    }).add({
        targets: 'header > .btn span',
        update: function(){
            $('nav').removeClass('open');
        }
    }).add({
        targets: 'header > .btn span',
        update: function(){
            $('header > .btn span').removeClass('animate');
        }
    });

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