const currentPath = window.location.pathname;

import products from '../../products.json';

//erstmal hier bauen, dann über import-export in shop.js verschieben
function shop() {
    if (currentPath = /subpages/shop.html) {
    



window.addEventListener('DOMContentLoaded', shop);


/* funktioniert nicht, grid gallery cafe subpage 
import Masonry from 'masonry-layout';

window.onload = () => {
    const grid = document.querySelector(".cafe__grid");
    const masonry = new Masonry(grid, {
        itemSelector: '.grid__item--vertical',
    });
}; */