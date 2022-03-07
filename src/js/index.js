function changeNavColor() {
  const navBar = document.querySelector(".mainNav");
  const navKategorien = document.querySelectorAll(".navKategorienLink");
  const burgerMenu = document.querySelector(".burgerMenu");
  const logoWhite = document.querySelector(".logo--white");
  const logoBlack = document.querySelector(".logo--black");
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scrollingActive", windowPosition);
  burgerMenu.classList.toggle("scrollingActive", windowPosition);
  logoWhite.classList.toggle('scrollingActive', windowPosition);
  logoBlack.classList.toggle('scrollingActive', windowPosition);

  navKategorien.forEach((element) => {
  element.classList.toggle('scrollingActive', windowPosition);
  })
}


window.addEventListener('scroll', changeNavColor);

