import products from "../../products.json";
import { categoryIcons } from "./icons.js";

/*function createProductDetails() {
    const productId = products.get('id');
  const productSection = document.querySelector(".singleProduct");

  const productElement = document.createElement("div");
  productElement.classList.add("singleProduct");

    const productImage = document.createElement("img");
    ProductImage.classList.add('img--kaffeepackung--beigeBg'),
      // (productImage.src = "/images/kaffeepackungCostaRicaGross.png");

    const productTitle = document.createElement("p");
    ProductTitle.classList.add("singleProductTitle");
    // const productTitleText = document.createTextNode(product.productName);

    const productPrice = document.createElement("p");
    productPrice.classList.add("singleProductPrice");
    // const productPriceText = document.createTextNode(product.price);

    const productDescription = document.createElement("p");
    productDescription.classList.add("singleProductDescription");
    // const productTitleText = document.createTextNode(product.productDescription);


    productTitle.appendChild(productTitleText);
    productPrice.appendChild(productPriceText);

    [productImage, productTitle, productPrice, productDescription].forEach( 
      
      ÄÄNDERN iN ID

      
      (element) => {
        productElement.appendChild(element);
      }
    );
    productSection.appendChild(productElement);
  }; */


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
