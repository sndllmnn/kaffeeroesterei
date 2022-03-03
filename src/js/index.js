function changeNavColor() {
  const navBar = document.querySelector("nav");
  const burgerMenu = document.querySelector(".burgerMenu");
  const logoWhite = document.querySelector(".logo--white");
  const logoBlack = document.querySelector(".logo--black");
  navBar.classList.toggle("sticky");
  burgerMenu.classList.toggle("sticky");
  logoWhite.classList.toggle('invisible');
  logoBlack.classList.toggle('visible');
}

window.onscroll = function () {
  changeNavColor();
};

/* funktioniert nicht, grid gallery cafe subpage 
import Masonry from 'masonry-layout';

window.onload = () => {
    const grid = document.querySelector(".cafe__grid");
    const masonry = new Masonry(grid, {
        itemSelector: '.grid__item--vertical',
    });
}; */
