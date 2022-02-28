/* pathname shop: /subpages/shop.html */

/* const currentPath = window.location.pathname; -> wenn aktiv geht's nicht,
wird aber auch so erkannt */

import products from '../../products.json'; 

function createProductElements() {
    const productSection = document.querySelector('.products');

    /* if (currentPath = "/subpages/shop.html") { */
       

        products.forEach((product) => { // für jedes Array Element von der products.json

        const productElement = document.createElement('div'); 
        productElement.classList.add('product');

        const productImageWrapper = document.createElement('div');
        productImageWrapper.classList.add('productImageWrapper');

        /*const productImage = document.createElement('img');
        productImage.classList.add('productImage');
        const productImageFile = document.createElement(product.productImage);
        productImage.appendChild(productImage); */
    
        const productTitle = document.createElement('p');
        productTitle.classList.add('productTitle');
        const productTitleText = document.createTextNode(product.productName);
        productTitle.appendChild(productTitleText);

        const productPrice = document.createElement('p');
        productPrice.classList.add('productPrice');
        const productPriceText = document.createTextNode(product.price);
        productPrice.appendChild(productPriceText);
        

        /* const productDescription = document.createElement('p');
        productDescription.classList.add('productDescription'); */

        /* const productIcons = document.createElement('div');
        productImage.classList.add('productIcons');

        productSection.appendChild(product);
        /* product.appendChild(productTitle, productPrice); */

        [productImageWrapper/*, productImage*/, productTitle, productPrice].forEach((element) => {
            productElement.appendChild(element);
        });
        productSection.appendChild(productElement);

    });
}

window.addEventListener("DOMContentLoaded",createProductElements);

/* named export export {shop}; */
