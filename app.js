window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticy", window.scrollY > 0);
});
/* here for slider image */
var slide = document.getElementById("slider");
var bt1 = document.getElementById("btn1");
var bt2 = document.getElementById("btn2");
var bt3 = document.getElementById("btn3");
var bt4 = document.getElementById("btn4");

function hey() {
  slide.style.transform = "translateX(0px)";
}
function hey1() {
  slide.style.transform = "translateX(-100%)";
}
function hey2() {
  slide.style.transform = "translateX(-200%)";
}
function hey3() {
  slide.style.transform = "translateX(-300%)";
}
/*slider image gallery */

function changeImage(event) {
  event = event || window.event;

  var targetElement = event.target || event.srcElement;

  if (targetElement.tagName == "IMG")
    document.getElementById("mainimg").src = targetElement.getAttribute("src");
}

/* slider for video test  */

var slides = document.querySelector(".slider-items").children;
var nextSlide = document.querySelector(".right-slide");
var prevSlide = document.querySelector(".left-slide");
var totalSlides = slides.length;
var index = 0;

nextSlide.onclick = function () {
  next("next");
};
prevSlide.onclick = function () {
  next("prev");
};

function next(direction) {
  if (direction == "next") {
    index++;
    if (index == totalSlides) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = totalSlides - 1;
    } else {
      index--;
    }
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
}
