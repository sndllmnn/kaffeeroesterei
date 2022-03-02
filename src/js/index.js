const nav = document.querySelector('nav');
const bgColor = document.querySelector(background-color);

function changeNavColor() {
    const navTransparent = document.querySelector('.nav--transparent');
    const navBlackWhite = document.querySelector('.nav--blackWhite');

    if ((this).bgColor.match(white)) { //sind nicht alle auf white... #fffff etc. und schließt img aus
        navTransparent.classList.add('.inactive');
        navBlackWhite.classList.add('.active');
    }

        else {
        navTransparent.classList.remove('.inactive');
        navBlackWhite.classList.remove('.active');
}
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