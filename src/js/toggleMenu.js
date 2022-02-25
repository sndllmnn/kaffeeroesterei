const burgerMenu = document.querySelector(".burgerMenu");
const navSidebar = document.querySelector(".toggleMenu");
const closeButton = document.querySelector(".closeButton");

function openBurgerMenu() {
    navSidebar.classList.toggle('show'); 
};

function closeWindow() {
    navSidebar.classList.remove('show');
}

burgerMenu.addEventListener('click', openBurgerMenu);
closeButton.addEventListener('click', closeWindow);

