//navigation
var s;
//
//nav
$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
    if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');


    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass("show");
    });


    return false;
});


//footer
$(document).on('scroll', function () {
    s = $(this).scrollTop();
    if (s > $('footer').offset().top - 400) {
        $('footer .menu').addClass('animated zoomIn');
    }
});

//

//sep2-pro
$(document).ready(function() {
    console.log("document is ready");


    $( ".card" ).hover(
        function() {
            $(this).addClass('shadow-lg').css('cursor', 'pointer');
        }, function() {
            $(this).removeClass('shadow-lg');
        }
    );
});



//slider
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 11000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
//
//about
$(window).on('scroll', function () {
    s = $(this).scrollTop();
    if (s > $('#aboutme').offset().top - 200) {
        $('#aboutme .about-descr').addClass('animated fadeInLeft');
        $('#aboutme .about-img').addClass('animated fadeInRight');
    }
});

//sec1-pro
$(window).on('scroll', function () {
    s = $(this).scrollTop();
    if (s > $('.sec1-pro').offset().top - 600) {
        $('.sec1-pro .service-card').addClass('animated zoomInDown');
    }
});

//sep2-pro
$(window).on('scroll', function () {
    s = $(this).scrollTop();
    if (s > $('.sep2-pro').offset().top - 300) {
        $('.sep2-pro .card').addClass('animated fadeInDown');
    }
});

//sec1-art
$(window).on('scroll', function () {
    s = $(this).scrollTop();
    if (s > $('.sec1-art').offset().top - 400) {
        $('.sec1-art .art-jquery-1').addClass('animated zoomInLeft');
        $('.sec1-art .art-jquery-2').addClass('animated zoomInRight');
    }
});

//news
$(window).on('scroll', function () {
    s = $(this).scrollTop();
    if (s > $('.news').offset().top - 400) {
        $('.news').addClass('animated zoomIn');
    }
});

//data-b
$(window).on('scroll', function () {
    s = $(this).scrollTop();
    if (s > $('.data-b').offset().top - 400) {
        $('.data-b .article-header').addClass('animated fadeInDown');
    }
});

//

//counter
$(document).ready(function(){
    $('.counter-value').each(function(){
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        },{
            duration: 3500,
            easing: 'swing',
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });
});



//counter
$(window).on('scroll', function () {
    s = $(this).scrollTop();
    if (s > $('.count').offset().top - 400) {
        $('.count .count1').addClass('animated zoomInDown');
    }
});

//



