const iconMenu = document.querySelector('.burger__icon ');
const menuBody = document.querySelector('.nav_main');
const bodyLock = document.querySelector('body');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        iconMenu.classList.toggle('open');
        menuBody.classList.toggle('open');
        bodyLock.classList.toggle('lock')
    });
}
const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;

function init(){
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width*images.length + 'px';
    images.forEach( item => {
        item.style.width = width + 'px';
        item.style.heigth = 'auto';
    });
    rollSlider();
} 

window.addEventListener('resize', init);
init();

document.querySelector('.btn-prev').addEventListener('click', function(){
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider()
});

document.querySelector('.btn-next').addEventListener('click', function(){
    count++;
    if (count >= images.length){
        count = 0;
    }
    rollSlider()
});

function rollSlider(){
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}
