import products from "../../products.json";
import { categoryIcons } from "./icons.js";

const clickableProductImages = document.querySelectorAll('.clickableProductImage');


function createProductElements() {
  const productSection = document.querySelector(".products");
  

  products.forEach((product) => {
    const categories = product.categories;

    const productElement = document.createElement("div");
    productElement.classList.add("product");

    const productImageWrapper = document.createElement("div");
    productImageWrapper.classList.add("productImageWrapper");

    const clickableProductImage = document.createElement("a");
    clickableProductImage.classList.add('clickableProductImage'),
      (clickableProductImage.href = "../subpages/productDetails.html?id=" + product.id);

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


  const burgerMenu = document.querySelector(".burgerMenu");
const navSidebar = document.querySelector(".toggleMenu");
const closeButton = document.querySelector(".closeButton");
const body = document.querySelector("body");

function openBurgerMenu() {
    navSidebar.classList.toggle('show'); 
    body.classList.toggle('scrollStop');
};

function closeWindow() {
    navSidebar.classList.remove('show');
    body.classList.remove('scrollStop');

};

window.addEventListener("DOMContentLoaded", createProductElements);
window.addEventListener("DOMContentLoaded", navDesign);
clickableProductImages.addEventListener('click', openProductDetailsTab);
burgerMenu.addEventListener('click', openBurgerMenu);
closeButton.addEventListener('click', closeWindow);
