$(document).ready(function () {

    //navbar fixed menu
    $(window).scroll(function () {
        //nav-bar fixed;
        var src = $(this).scrollTop();
        if (src >= 500) {
            $('.nav-bar').addClass('nav-fixed');
        } else {
            $('.nav-bar').removeClass('nav-fixed');
        };


        //top scroll fixed;
        if (src >= 900) {
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }
    });
    $('.top').click(function () {
        $('html,body').animate({
            scrollTop: 0,
        }, 1100);
    });

    //link click scroll smoothing;
    $('a').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();
            var hash = this.hash;
            $('html.body').animate({
                scrollTop: $(hash).offset().top
            })
        }
        var hash = this.hash;
        $('html,body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {
            window.location.hash = hash;
        });
    });

    //slick plugins
    $(".banner-slider").slick({
        arrow: true,
        prevArrow: "<i class='fa fa-chevron-left left-arrow'></i>",
        nextArrow: "<i class='fa fa-chevron-right right-arrow'></i>",
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
    });

    $('.text-slider').slick({
        dots: true,
        arrow: false,
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        autoplaySpeed: 4000,
    });

    //mixitup plugins
    var mixer = mixitup('.gallery-content');

    //venobox plugins
    $(".venobox").venobox({
        framewidth: '700px',
        frameheight: '500px',
        overlayColor: "rgb(86, 213, 240,0.85)",
        spinner: 'cube-grid',
        spinColor: 'White',
        closeColor: 'White',
        titleBackground: 'rgb(86, 213, 240)',
        titleColor: 'White',
    });

    //WOW plugins;
    new WOW().init();

    //type;
    var options = {
        strings: ['Hello World!', 'Web Design By^1000 </br> <span id="r">R^200</span><span id="z">Z</span>^1000', 'Contact for more'],
        typeSpeed: 70,
        loop: Infinity,
        smartBackspace: true,
        shuffle: true,
    };

    var typed = new Typed('#typer', options);

    //parallax;
    $('.type-bg').parallax({ imageSrc: 'image/h.jpg' });

    //filter hover 
    $('.filter ul li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

});



