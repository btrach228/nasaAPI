function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

//burger click

let element = document.querySelector(".menu_nav");
let body = document.querySelector("body");
let popupHeader = document.querySelector(".popap__container_wrap");

element.addEventListener("click", (e) => {
  // e.preventDefault();
  element.classList.toggle("active");
  body.classList.toggle("lockScroll");
  popupHeader.classList.toggle("popap__container_wrap__active");
});

// popup form

const supportBtn = document.querySelector(".fa-info-circle");
const closePopupForm = document.querySelector(".popup__close");
const popupForm = document.querySelector(".popup__container");
const popup__submit_btn = document.querySelector(".popup__submit_btn");

supportBtn.addEventListener("click", showPopupForm);

closePopupForm.addEventListener("click", () => {
  popupForm.classList.add("popup__container__close");
  popupForm.classList.remove("popup__container__active");
});
function showPopupForm(e) {
  popupForm.classList.add("popup__container__active");
}

setTimeout(showPopupForm, 60000);

// slider

let btn1 = document.querySelector(".main__catalog-toggle-1");
let btn2 = document.querySelector(".main__catalog-toggle-2");
let btn3 = document.querySelector(".main__catalog-toggle-3");
let btn4 = document.querySelector(".main__catalog-toggle-4");

let slider = document.querySelector(".main__catalog-list");

btn1.addEventListener("click", () => {
  slider.style.left = "0px";
});

btn2.addEventListener("click", () => {
  slider.style.left = "-300px";
});

btn3.addEventListener("click", () => {
  slider.style.left = "-600px";
});
btn4.addEventListener("click", () => {
  slider.style.left = "-900px";
});
