(function ($) {
    "use strict";

    // Spinner — se oculta solo cuando la ventana terminó de cargar
    // (imágenes, scripts y demás recursos incluidos).
    // El timeout original de 1 ms ocultaba el spinner antes de que
    // jQuery, OwlCarousel y WOW.js terminaran de inicializarse,
    // provocando que la página se vea rota en la primera visita.
    $(window).on('load', function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }

        // Se inicializa OwlCarousel aquí adentro para garantizar que
        // la librería ya esté lista y el DOM completamente cargado.
        initCarousels();
    });


    // WOW.js — animaciones al hacer scroll
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });


    // Dropdown on mouse hover (solo en pantallas grandes)
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
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
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    // Nota: tempusdominus-bootstrap-4 no es compatible con Bootstrap 5.
    // Si los campos .date y .time no se usan en esta página, estas líneas
    // no tienen efecto. Si los necesitás, considerá migrar a Flatpickr u
    // otro datepicker compatible con BS5.
    if ($('.date').length > 0) {
        $('.date').datetimepicker({ format: 'L' });
    }
    if ($('.time').length > 0) {
        $('.time').datetimepicker({ format: 'LT' });
    }


    // Image comparison — solo se inicializa si el contenedor existe
    if ($(".twentytwenty-container").length > 0) {
        $(".twentytwenty-container").twentytwenty({});
    }


    // Carruseles — función separada llamada desde el evento 'load'
    function initCarousels() {

        // Price carousel
        if ($(".price-carousel").length > 0) {
            $(".price-carousel").owlCarousel({
                autoplay: true,
                smartSpeed: 1500,
                margin: 45,
                dots: false,
                loop: true,
                nav: true,
                navText: [
                    '<i class="bi bi-arrow-left"></i>',
                    '<i class="bi bi-arrow-right"></i>'
                ],
                responsive: {
                    0: { items: 1 },
                    768: { items: 2 }
                }
            });
        }

        // Testimonials carousel
        if ($(".testimonial-carousel").length > 0) {
            $(".testimonial-carousel").owlCarousel({
                autoplay: true,
                smartSpeed: 1000,
                items: 1,
                dots: false,
                loop: true,
                nav: true,
                navText: [
                    '<i class="bi bi-arrow-left"></i>',
                    '<i class="bi bi-arrow-right"></i>'
                ],
            });
        }
    }

})(jQuery);
