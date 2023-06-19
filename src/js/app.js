import * as webp from './modules/webp.js';
import { lazyload } from './modules/lazyload.js';
import { smoothScroll } from './modules/smoothScroll.js';

webp.testWebP();

const images = $('img.lazyload')
images.each(function () {
    $(this).css('height', $(this).attr('height'))
})

lazyload()
smoothScroll()