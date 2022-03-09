function navDesign() {
  const navBar = document.querySelector(".mainNav");
  const navKategorien = document.querySelectorAll(".navKategorienLink");
  const burgerMenu = document.querySelector(".burgerMenu");
  const logoWhite = document.querySelector(".logo--white");
  const logoBlack = document.querySelector(".logo--black");
  navBar.classList.toggle("scrollingActive");
  burgerMenu.classList.toggle("scrollingActive");
  logoWhite.classList.toggle('scrollingActive');
  logoBlack.classList.toggle('scrollingActive');

  navKategorien.forEach((element) => {
  element.classList.toggle('scrollingActive');
  })
}

window.addEventListener("DOMContentLoaded", navDesign);




/*import products from "../../products.json";
import { categoryIcons } from "./icons.js";

function parameter() {
  const urlParams = URLSearchParams.get





/*function showProductDetails() {
  const productSection = document.querySelector(".product");
  

  products.forEach((product) => {
    const categories = product.categories;
    // für jedes Array Element von der products.json

    const productElement = document.createElement("div");
    productElement.classList.add("product");

    const productImageWrapper = document.createElement("div");
    productImageWrapper.classList.add("productImageWrapper");

    const clickableProductImage = document.createElement("a");
    clickableProductImage.classList.add('clickableProductImage'),
      (clickableProductImage.href = product.detailPageURL);

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

    clickableProductImage.appendChild(productImage);
    productImageWrapper.appendChild(clickableProductImage);
    productTitle.appendChild(productTitleText);
    productPrice.appendChild(productPriceText);

    [clickableProductImage, productImageWrapper, productTitle, productPrice, productIcons].forEach(
      (element) => {
        productElement.appendChild(element);
      }
    );
    productSection.appendChild(productElement);
  });
}

window.addEventListener("DOMContentLoaded", showProductDetails); */
