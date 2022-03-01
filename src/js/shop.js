/* pathname shop: /subpages/shop.html */


import products from "../../products.json";


function createProductElements() {
  const productSection = document.querySelector(".products");

  products.forEach((product) => {
    // für jedes Array Element von der products.json

    const productElement = document.createElement("div");
    productElement.classList.add("product");

    const productImageWrapper = document.createElement("div");
    productImageWrapper.classList.add("productImageWrapper");

    const productImage = document.createElement("img");
    productImage.classList.add('img--kaffeepackung'),
    productImage.src = "/images/kaffeepackungCostaRica.png";

    const productTitle = document.createElement("p");
    productTitle.classList.add("productTitle");
    const productTitleText = document.createTextNode(product.productName);

    const productPrice = document.createElement("p");
    productPrice.classList.add("coffeePrice");
    const productPriceText = document.createTextNode(product.price);

    const productIcons = document.createElement("div");
    productIcons.src = "/components/icons.hbs";

    /* const productDescription = document.createElement('p');
        productDescription.classList.add('productDescription'); */

    /* const productIcons = document.createElement('div');
        productImage.classList.add('productIcons');

        productSection.appendChild(product);
        /* product.appendChild(productTitle, productPrice); */

    [productImageWrapper, productTitle, productPrice].forEach((element) => {
      productElement.appendChild(element);
    });
    productSection.appendChild(productElement);
    productImageWrapper.appendChild(productImage);
    productTitle.appendChild(productTitleText);
    productPrice.appendChild(productPriceText);
    productElement.appendChild(productIcons);
  });
}

window.addEventListener("DOMContentLoaded", createProductElements);

/* named export export {shop}; */

function coffeeImageBackground(color) {
    if (window.location.pathname === "/subpages/shop.html") {
        const coffeeImages = [document.querySelectorAll('.img--kaffeepackung')];

      coffeeImages.forEach((coffeeImage) => {
      cofeeImages.style.backgroundColor = color;
    });
  }

window.addEventListener("DOMContentLoaded", function() { coffeeImageBackground('transparent')});







