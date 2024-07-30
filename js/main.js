(function ($) {
    "use strict";

    // Smooth scroll to section
    $(document).ready(function () {
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();

            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 1500, 'easeInOutExpo');
        });
    });
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    $(".conversion").click(function(event) {
        event.preventDefault(); // Evita o redirecionamento imediato
        var urlDestino = event.currentTarget.href; // Pega a URL de destino do botão
        console.log(`Conversion registered for url: ${urlDestino} `)
        gtag('event', 'conversion', { 
            'send_to': 'AW-16626198590/43b2CIul5r0ZEL7Q_vc9', 
            'value': 1.0, 
            'currency': 'BRL',
            'event_destination_url': urlDestino
        });
    
        setTimeout(function() {
            window.location.href = urlDestino;
        }, 500); // 500 ms de atraso para garantir que o evento seja enviado
    })


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 2000,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    
})(jQuery);

