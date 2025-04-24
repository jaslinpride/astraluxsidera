const mainMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);


function show(){
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0";
}

function close() {
    mainMenu.style.top = '-120%';
}


function slideLeft() {
    const slider = document.getElementById("slider");
    slider.scrollBy({
        left: -400,
        behavior: "smooth"
    });
}

function slideRight() {
    const slider = document.getElementById("slider");
    slider.scrollBy({
        left: 400,
        behavior: "smooth"
    });
}


