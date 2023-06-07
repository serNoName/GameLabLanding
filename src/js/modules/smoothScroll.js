export function smoothScroll() {
    $('a[href^="#"].smooth-scroll').on('click', function (event) {
        const target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
}