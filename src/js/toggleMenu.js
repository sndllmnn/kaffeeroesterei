const burgerMenu = document.querySelector(".burgerMenu");
const navSidebar = document.querySelector(".toggleMenu");
const closeButton = document.querySelector(".closeButton");
const body = document.querySelector("body");

function openBurgerMenu() {
    navSidebar.classList.toggle('show'); 
    body.classList.toggle('scrollStop');
};

function closeWindow() {
    navSidebar.classList.remove('show');
    body.classList.remove('scrollStop');

}

burgerMenu.addEventListener('click', openBurgerMenu);
closeButton.addEventListener('click', closeWindow);

