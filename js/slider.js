const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: -10
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 10
        }
    }
});

let cardContentWrapper = document.querySelector(".brand-list__wrapper");
let showNext = document.querySelector('.show-button');


showNext.onclick = function () {
    if(showNext.textContent === "Показать все") {
        cardContentWrapper.style.height = "365px";
        showNext.textContent = "Скрыть";
        showNext.classList.add('reverse');
    } else {
        cardContentWrapper.style.height = "175px";
        showNext.textContent = "Показать все";
        showNext.classList.remove('reverse');
    }
}