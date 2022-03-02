import products from "../../products.json";
/* import { categoryIcons } from "./icons"; */


function createProductElements() {
  const productSection = document.querySelector(".products");

  products.forEach((product) => {
    // für jedes Array Element von der products.json

    const productElement = document.createElement("div");
    productElement.classList.add("product");

    const productImageWrapper = document.createElement("div");
    productImageWrapper.classList.add("productImageWrapper");

    const productImage = document.createElement("img");
    productImage.classList.add('img--kaffeepackung--greyBg'),
    productImage.src = "/images/kaffeepackungCostaRicaGross.png";

    const productTitle = document.createElement("p");
    productTitle.classList.add("productTitle");
    const productTitleText = document.createTextNode(product.productName);

    const productPrice = document.createElement("p");
    productPrice.classList.add("coffeePrice");
    const productPriceText = document.createTextNode(product.price);

    /* const productIcons = document.createElement("div");
    productIcons.classList.add('productIcons');
    productIcons. ????? = document.create ???? */

    [productImageWrapper, productTitle, productPrice].forEach((element) => {
      productElement.appendChild(element);
    });
    productSection.appendChild(productElement);
    productImageWrapper.appendChild(productImage);
    productTitle.appendChild(productTitleText);
    productPrice.appendChild(productPriceText);
    /* productElement.appendChild(productIcons); */
  });
}

window.addEventListener("DOMContentLoaded", createProductElements);







