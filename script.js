let currentSlide = 1;
const totalSlides = document.querySelectorAll('.last-item').length;

const currentSlideElement = document.querySelector('.current-slide');
const totalSlidesElement = document.querySelector('.total-slides');
const sliderLine = document.querySelector('.slider-line');
const btnNext = document.getElementById('next');
const btnBack = document.getElementById('prev');

totalSlidesElement.textContent = totalSlides;

function updateSlideCounter() {
    currentSlideElement.textContent = currentSlide;
}

let offset = 0;

function SliderNext() {
    currentSlide++;
    if (currentSlide > totalSlides) {
        currentSlide = 1;
    }
    offset = (currentSlide - 1) * 400;
    sliderLine.style.left = -offset + 'px';
    updateSlideCounter();
}

function SliderBack() {
    currentSlide--;
    if (currentSlide < 1) {
        currentSlide = totalSlides;
    }
    offset = (currentSlide - 1) * 400;
    sliderLine.style.left = -offset + 'px';
    updateSlideCounter();
}

btnNext.addEventListener('click', SliderNext);
btnBack.addEventListener('click', SliderBack);

updateSlideCounter();
