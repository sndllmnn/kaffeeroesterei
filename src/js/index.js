function changeNavColor() {
    const navBar = document.querySelector('nav');
    navBar.classList.add('.sticky');
}

document.addEventListener('scroll', changeNavColor());
        


/* funktioniert nicht, grid gallery cafe subpage 
import Masonry from 'masonry-layout';

window.onload = () => {
    const grid = document.querySelector(".cafe__grid");
    const masonry = new Masonry(grid, {
        itemSelector: '.grid__item--vertical',
    });
}; */