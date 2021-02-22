(function ($) {
    "use strict";

    /*----------------------------
       		Preloader Active
       	------------------------------*/

        $(window).on('load', function () {
            $(".preloader").fadeOut(500);
        });

    /*----------------------------
       		Main Slider Active
       	------------------------------*/
    $(".ul-main-slider").owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    /*----------------------------
       		About Slider Active
       	------------------------------*/
    $(".about-slider-area").owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /*----------------------------
       		About Slider Active
       	------------------------------*/
    $(".ul-all-team-wraper").owlCarousel({
        loop: true,
        autoplay: true,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });


    /*----------------------------
    		Slider popup active
    	------------------------------*/

    $(".slider-popup").magnificPopup({
        type: "iframe"
    });

    /*----------------------------
    		Video popup active
    	------------------------------*/

    $(".popup-video").magnificPopup({
        type: "iframe"
    });


    /*----------------------------
       		Blog Slider Active
       	------------------------------*/
    $(".blog-img-slider").owlCarousel({
        loop: true,
        autoplay: true,
        animateIn: 'zoomInDown',
        smartSpeed: 5000,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /*----------------------------
    		Blog Video Popup Active
    	------------------------------*/

    $(".blog-popup-video").magnificPopup({
        type: "iframe"
    });

    /*----------------------------
       		Sticky Header Active
       	------------------------------*/

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 2) {
            $(".ul-nav-area").removeClass("nav-fixed animated slideInDown");
        } else {
            $(".ul-nav-area").addClass("nav-fixed animated slideInDown");
        }
    });

    /*----------------------------
       		main menu Active
       	------------------------------*/

    jQuery('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });

    /*----------------------------
       		search form Active
       	------------------------------*/

    $('#close-btn').on('click', function () {
        $('#search-overlay').fadeOut();
        $('#search-btn').show();
    });
    $('#search-btn').on('click', function () {
        $('#search-overlay').fadeIn();
    });
    /*----------------------------
       		Social form Active
       	------------------------------*/

    $('#popup-close-btn').on('click', function () {
        $('#ul-social-popup-overlay').fadeOut();
        $('#social-pop-btn').show();
    });
    $('#social-pop-btn').on('click', function () {
        $('#ul-social-popup-overlay').fadeIn();
    });

    /*----------------------------
    		Counter Active
    	------------------------------*/

    $('.counter').counterUp({
        delay: 2,
        time: 1000
    });

    /*----------------------------
    		Video popup active
    	------------------------------*/

    $(".popup-video").magnificPopup({
        type: "iframe"
    });

    /*----------------------------
        		testimonial slider Active
        	------------------------------*/

    $(".testimonial-wraper").owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });


    /*----------------------------
         		scrolltop active
         	------------------------------*/

    $('body').materialScrollTop();

    /*----------------------------
        		WOW active
        	------------------------------*/

    new WOW().init();

})(jQuery);