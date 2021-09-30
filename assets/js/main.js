(function ($) {
    'use strict'

    // Smooth scrolling using jQuery easing
    $('#mainNav li a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 50)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });
    $('.down-up a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 50)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('#mainNav li a').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 56
    });

    $(window).on('scroll', function () {
        var wScroll = $(this).scrollTop();
        if (wScroll > 1) {
            $('#mainNav').addClass('top-nav-fixed');
        } else {
            $('#mainNav').removeClass('top-nav-fixed');
        };
    });



    /*
    ========================================
    Scroll to top
    ========================================
    */
    if ($('#scroll-top').length) {
        function scrollToTop() {
            var $scrollUp = $('#scroll-top'),
                $lastScrollTop = 0,
                $window = $(window);

            $window.on('scroll', function () {
                var st = $(this).scrollTop();
                if (st > $lastScrollTop) {
                    $scrollUp.removeClass('show');
                } else {
                    if ($window.scrollTop() > 200) {
                        $scrollUp.addClass('show');
                    } else {
                        $scrollUp.removeClass('show');
                    }
                }
                $lastScrollTop = st;
            });

            $scrollUp.on('click', function (evt) {
                $('html, body').animate({ scrollTop: 0 }, 600);
                evt.preventDefault();
            });
        }
        scrollToTop();
    }



    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 10,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });


    /**============ Accordion Style Script 4 ===========**/

    (function ($) {
        $('.accordion-4 > li:eq(0) a').addClass('active').next().slideDown();

        $('.accordion-4 a').click(function (j) {
            var dropDown = $(this).closest('li').find('p');

            $(this).closest('.accordion-4').find('p').not(dropDown).slideUp();

            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $(this).closest('.accordion-4').find('a.active').removeClass('active');
                $(this).addClass('active');
            }

            dropDown.stop(false, true).slideToggle();

            j.preventDefault();
        });
    })(jQuery);


    AOS.init();

 


})(jQuery);