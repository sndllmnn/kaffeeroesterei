import products from "../../products.json";
import { categoryIcons } from "./icons.js";

function createProductElements() {
  const productSection = document.querySelector(".products");
  

  products.forEach((product) => {
    const categories = product.categories;
    // für jedes Array Element von der products.json

    const productElement = document.createElement("div");
    productElement.classList.add("product");

    const productImageWrapper = document.createElement("div");
    productImageWrapper.classList.add("productImageWrapper");

    const productImage = document.createElement("img");
    productImage.classList.add("img--kaffeepackung--greyBg"),
      (productImage.src = "/images/kaffeepackungCostaRicaGross.png");

    const productTitle = document.createElement("p");
    productTitle.classList.add("productTitle");
    const productTitleText = document.createTextNode(product.productName);

    const productPrice = document.createElement("p");
    productPrice.classList.add("coffeePrice");
    const productPriceText = document.createTextNode(product.price);

    const productIcons = document.createElement("div");
    productIcons.classList.add("productIcons");
    categories.forEach((category) => {
      const productIcon = document.createElement("img");
      productIcon.setAttribute("src", categoryIcons[category]);
      productIcons.appendChild(productIcon);
    });

    productImageWrapper.appendChild(productImage);
    productTitle.appendChild(productTitleText);
    productPrice.appendChild(productPriceText);

    [productImageWrapper, productTitle, productPrice, productIcons].forEach(
      (element) => {
        productElement.appendChild(element);
      }
    );
    productSection.appendChild(productElement);
  });
}

window.addEventListener("DOMContentLoaded", createProductElements);
