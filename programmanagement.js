const mainMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');




openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

const images = document.querySelectorAll('.image-container img');
const nextArrow = document.querySelector('next-arrow');
let currentImage = 0;

nextArrow.addEventListener('click', () => {
    currentImage = (currentImage + 1) % images.length;
    const translateX = -currentImage * 100;
    document.querySelector('.image-container').style.transform =
    `translateX(${translateX}%)`;
})