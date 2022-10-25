const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination',
    },
    slidesPerView: 1.2,
});

let cardContentWrapper = document.querySelector(".brand-list__wrapper");
let showNext = document.querySelector('.show-button');


showNext.onclick = function () {
    if(showNext.textContent === "Показать все") {
        cardContentWrapper.style.maxHeight = "11350px"; 
        showNext.textContent = "Скрыть";
        showNext.classList.add('reverse');
    } else {
        cardContentWrapper.style.maxHeight = "175px";
        showNext.textContent = "Показать все";
        showNext.classList.remove('reverse');
    }
}