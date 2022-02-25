// pathname shop: /subpages/shop.html
const currentPath = window.location.pathname;

import products from '../../products.json';

function shop() {
    if (currentPath = /subpages/shop.html) {
        createProductElements;}
    }
    // unnötig in zwei Funktionen?

    function createProductElements() {
        const productSection = window.document.querySelector('products');
        const productContainer = window.document.createElement('div');
// weiß nicht mehr ,was hier product ist, ergibt keinen Sinn, nicht festgelegt:
        products.forEach(product => {
            const productElement = window.document.createElement('div');
            productElement.classList.add('product');

            const productTitle = document.createElement('p');
            productTitle.classList.add('productTitle');

            const productPrice
            productPrice.classList.add('kaffeepreis');


            const productDescription = document.createElement('p');
            productDescription.classList.add('productDescription');

            const productImage = document.createElement('img');
            productImage.classList.add('productImage');

            const productIcons = document.createElement('div');
            productImage.classList.add('productIcons');
        }
    }

    window.addEventListener('DOMContentLoaded', shop);


// named export
export {shop};
