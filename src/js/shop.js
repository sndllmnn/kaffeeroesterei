// pathname shop: /subpages/shop.html

// const currentPath = window.location.pathname; -> wenn aktiv geht's nicht,
// wird aber auch so erkannt

// import products from '../../products.json'; -> wie?

function shop() {
    if (currentPath = "/subpages/shop.html") {
        const productSection = window.document.querySelector('.products');
        /* const productContainer = window.document.createElement('div'); */
        const product = window.document.createElement('div');


        // weiß nicht mehr ,was hier product ist, ergibt keinen Sinn, nicht festgelegt:

        products.forEach(product => { // für jedes Array Element von der products.json

            const productTitle = document.createElement('p');
            productTitle.classList.add('productTitle');


            const productPrice = document.createElement('p');
            productPrice.classList.add('productPrice');


            const productDescription = document.createElement('p');
            productDescription.classList.add('productDescription');

            const productImage = document.createElement('img');
            productImage.classList.add('productImage');

            const productIcons = document.createElement('div');
            productImage.classList.add('productIcons');

        productSection.appendChild(product);
        product.appendChild(productTitle, productPrice, productDescription, productImage, productIcons);
        }
    }
}


window.addEventListener("DOMContentLoaded", shop);

/* named export
export {shop}; */
