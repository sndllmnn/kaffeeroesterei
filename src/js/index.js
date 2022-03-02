function changeNavColor() {
    const navBar = document.querySelector('nav');
    navBar.classList.toggle("sticky", window.scrollY > 0);

    /* navBar.classList.add('.sticky'); */
}

document.addEventListener('scroll', changeNavColor);


        
/* function (){
  var header = document.querySelector(".primary-header");
  header.classList.toggle("sticky", window.scrollY > 0);
}) */







/* funktioniert nicht, grid gallery cafe subpage 
import Masonry from 'masonry-layout';

window.onload = () => {
    const grid = document.querySelector(".cafe__grid");
    const masonry = new Masonry(grid, {
        itemSelector: '.grid__item--vertical',
    });
}; */