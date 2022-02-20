

/* import myFunction, { multiply } from "./myModule";

myFunction();

const result = multiply(2, 5);

console.log(result); */

import Masonry from 'masonry-layout';

window.onload = () => {
    const grid = document.querySelector(".cafe__grid");
    const masonry = new Masonry(grid, {
        itemSelector: '.grid__item',
    });
};