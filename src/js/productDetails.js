import products from "../../products.json";

const productID = new URLSearchParams(window.location.search).get("id");
const currentProduct = products.filter(
  (product) => product.id === productID
)[0];

function createProductDetails() {
  const productSection = document.querySelector(".singleProduct");

  const productElement = document.createElement("div");
  productElement.classList.add("singleProduct");

  const productTitle = document.createElement("h2");
  productTitle.classList.add("singleProductTitle");
  const productTitleText = document.createTextNode(currentProduct.productName);

  const productImageWrapper = document.createElement("div");
  productImageWrapper.classList.add("productImageWrapper");

  const productImage = document.createElement("img");
  productImage.classList.add("singleProductImage"),
    (productImage.src = "/images/kaffeepackungCostaRicaGross.png");


  const productPrice = document.createElement("p");
  productPrice.classList.add("singleProductPrice");
  const productPriceText = document.createTextNode(currentProduct.price);

  const productDescription = document.createElement("p");
  productDescription.classList.add("singleProductDescription");
  const productDescriptionText = document.createTextNode(
    currentProduct.productDescription);

  productTitle.appendChild(productTitleText);
  productPrice.appendChild(productPriceText);
  productDescription.appendChild(productDescriptionText);
  productImageWrapper.appendChild(productImage);

  [
    productImageWrapper,
    productImage,
    productTitle,
    productPrice,
    productDescription,
  ].forEach((element) => {
    productSection.appendChild(element);
  });
};

function navDesign() {
  const navBar = document.querySelector(".mainNav");
  const navKategorien = document.querySelectorAll(".navKategorienLink");
  const burgerMenu = document.querySelector(".burgerMenu");
  const logoWhite = document.querySelector(".logo--white");
  const logoBlack = document.querySelector(".logo--black");
  navBar.classList.toggle("scrollingActive");
  burgerMenu.classList.toggle("scrollingActive");
  logoWhite.classList.toggle("scrollingActive");
  logoBlack.classList.toggle("scrollingActive");

  navKategorien.forEach((element) => {
    element.classList.toggle("scrollingActive");
  });
}

window.addEventListener("DOMContentLoaded", navDesign);
window.addEventListener("DOMContentLoaded", createProductDetails);
