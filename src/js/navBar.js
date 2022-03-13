function changeNavColor() {
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


window.addEventListener('DOMContentLoaded', changeNavColor);

