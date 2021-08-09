

$(document).ready(function () {



    // menu responsivo

    if ($('.menu-responsive').lenght > 0) {
        setMaxHeight($('.menu-responsive'));
    }

    $('.block-bar').click(function () {
        if ($(this).hasClass('change')) {
            $(this).removeClass('change');
            $('.menu-mobile').fadeOut();
        } else {
            $(this).addClass('change');
            $('.menu-mobile').fadeIn();
        }
    });

    $('.block-bar').click(function () {
        $('.menu-responsive').addClass('active');
        $('.menu-container .full-page').addClass('active');
    });

    $('.fechar').click(function () {
        $('.menu-responsive').removeClass('active');
        $('.menu-container .full-page').removeClass('active');
    });

    $('.menu-responsive .nav-menu ul li a ').click(function () {
        $('.menu-responsive').removeClass('active');
        $('.menu-container .full-page').removeClass('active');
    });

    $('.menu-container .full-page').click(function () {
        $('.menu-responsive').removeClass('active');
        $('.menu-container .full-page').removeClass('active');
    });






    //Este é o código da tela de "Loading" ela aparece assim que você abre o site, ali temos #status e #placeholder que são ID nas nossas páginas HTML, básicamente faz um efeito de "FADE" e quando acaba o tempo mostra o nosso site

    window.setTimeout(function () {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({ 'overflow': 'visible' });
    }, 4000);


    // Este é o código do "Owl-carousel"


    $('.owl-blog').owlCarousel({
        loop: true,
        margin: 50,
        nav: true,
        navText: ["<img src='images/esquerda.png'>", "<img src='images/direita.png'  class='block'>"],
        dots: false,
        items: 2,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,

            },
            600: {
                items: 1,
                dots: true,
                nav: false,
            },
            1024: {
                mouseDrag: false,
                touchDrag: true,
                items: 2,
            }
        }
    }
    );

    // Carrossel 2

    $('.owl-artigos').owlCarousel({
        loop: true,
        margin: 50,
        nav: true,
        navText: ["<img src='images/nav-esquerda.png'>", "<img src='images/nav-direita.png'  class='block'>"],
        dots: false,
        items: 3,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,

            },
            600: {
                items: 1,
                dots: true,
                nav: false,
            },
            1024: {
                mouseDrag: false,
                touchDrag: true,
                items: 2,
            }
        }


    });


    //Este é o codigo do Count

    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });


    // Este é o código do FAQ :D

    $(document).ready(function () {
        $('.acc h3').click(function () {
            $(this).next('.content').slideToggle();
            $(this).parent().toggleClass('active');
            $(this).parent().siblings().children('.content').slideUp();
            $(this).parent().siblings().removeClass('active');
        });
    });


    //Mascaras
    var SPMaskBehavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    }, spOptions = {
        onKeyPress: function (val, e, field, options) {
            field.mask(SPMaskBehavior.apply({}, arguments), options);
        }
    };

    if ($(".cep-mask").length > 0) {
        $(".cep-mask").mask('99.999-999');
    }

    if ($(".date-mask").length > 0) {
        $(".date-mask").mask('99/99/9999');
    }

    if ($(".number-mask").length > 0) {
        $(".number-mask").mask('00000');
    }

    if ($(".cvv-mask").length > 0) {
        $(".cvv-mask").mask('999');
    }

    if ($(".cpf-mask").length > 0) {
        $(".cpf-mask").mask('999.999.999-99');
    }

    if ($(".phone-mask").length > 0) {
        $('.phone-mask').mask(SPMaskBehavior, spOptions);
    }





});
