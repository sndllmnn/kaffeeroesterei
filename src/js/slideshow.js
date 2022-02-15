// dots der slideshow benennen
const slideshowDots = document.querySelectorAll(".slideshow-dot");

// ersten der vier dots anwählen und active-pseudoclass hinzufügen
slideshowDots[0].classList.add("active");

// das selbe mit der ersten slide
const slides = document.querySelectorAll(".slide");
slides[0].classList.add("active");

// Konstanten für die Pfeiltasten
const arrowNext = document.querySelector(".arrow-next");
const arrowPrev = document.querySelector(".arrow-prev");

// Index der aktuellen Slide
var currentSlide = 0;
var currentDot = 0;

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  slideshowDots[currentDot].classList.remove("active");

  var newCurrentSlide = 1 + currentSlide;
  var newCurrentDot = currentDot + 1;

  if (newCurrentSlide > 3) {
    newCurrentSlide = 0;
  }

  if (newCurrentDot > 3) {
    newCurrentDot = 0;
  }

  slides[newCurrentSlide].classList.add("active");
  slideshowDots[newCurrentDot].classList.add("active");

  currentSlide = newCurrentSlide;
  currentDot = newCurrentDot;
}

function prevSlide(number) {
  slides[currentSlide].classList.remove("active");
  slideshowDots[currentDot].classList.remove("active");

  var newCurrentSlide = currentSlide - 1;
  var newCurrentDot = currentDot - 1;

  if (newCurrentSlide < 0) {
    newCurrentSlide = 3;
  }

  if (newCurrentDot < 0) {
    newCurrentDot = 3;
  }

  slides[newCurrentSlide].classList.add("active");
  slideshowDots[newCurrentDot].classList.add("active");

  currentSlide = newCurrentSlide;
  currentDot = newCurrentDot;
}

arrowNext.addEventListener("click", nextSlide);
arrowPrev.addEventListener("click", prevSlide);


