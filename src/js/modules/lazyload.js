export function lazyload() {
    //lazy load
    const images = document.querySelectorAll('img.lazyload');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    }

    function handleImg(myImg, observer) {
        myImg.forEach(myImgSingle => {
            if (myImgSingle.intersectionRatio > 0) {
                loadImage(myImgSingle.target)
            }
        })
    }

    function loadImage(image) {
        if (!$(image).hasClass('lazyload_show')) $(image).hide();

        let extension = image.getAttribute('data-src').match(/\.([^.]+)$|$/)[1]

        if (extension == 'svg') { // if this is a svg
            image.src = `${image.getAttribute('data-src')}`
        } else { // if this is not a svg
            if (image.getAttribute('data-x2set') == null) {
                image.src = `${image.getAttribute('data-src')}`
                $(image).removeAttr('data-x2set').removeAttr('data-set')
            } else {
                image.srcset = `${image.getAttribute('data-src')} 1x, ${image.getAttribute('data-x2set')} 2x`
            }
        }

        $(image).fadeIn(500 , function () {
            $(this).addClass('lazyload_show')
        });

        // image.src = image.getAttribute('data-src')
        // image.srcset = `${image.getAttribute('data-src').split('.')[0]}_x2.${extension} 2x`
    }
    const observer = new IntersectionObserver(handleImg, options);

    images.forEach(img => {
        observer.observe(img)
    })

    images.forEach(function(img) {
        var height = img.getAttribute('height'); // Получение значения атрибута height
        img.style.height = height; // Установка высоты изображения
    });
}