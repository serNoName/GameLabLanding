export function smoothScroll() {
    $('a[href^="#"].smooth-scroll').on('click', function (event) {
        const target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
        // if (target.length) {
        //     event.preventDefault();

        //     let targetOffsetTop = target.offset().top;
        //     let currentOffsetTop = $(window).scrollTop();

        //     console.log('Current offsetTop: ' + currentOffsetTop);
        //     console.log('Target offsetTop: ' + targetOffsetTop);

        //     function scrollToTarget(offset) {
        //         if (offset <= targetOffsetTop) {
        //             $(window).scrollTop(offset);
        //             if (offset !== targetOffsetTop) {
        //                 requestAnimationFrame(() => scrollToTarget(offset + 70));
        //             }
        //         }

        //         console.log('Current offsetTop: ' + $(window).scrollTop());
        //         console.log('Target offsetTop: ' + target.offset().top);
        //     }

        //     scrollToTarget(currentOffsetTop);

        // }
    });
}