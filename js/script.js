// Slider

let siteWrapper = document.querySelector(".site-wrapper");
let sliderList1 = document.querySelector(".slide-1");
let sliderList2 = document.querySelector(".slide-2");
let sliderList3 = document.querySelector(".slide-3");
let sliderBtn1 = document.querySelector(".btn-1");
let sliderBtn2 = document.querySelector(".btn-2");
let sliderBtn3 = document.querySelector(".btn-3");

sliderBtn1.addEventListener("click", function () {
  siteWrapper.classList.remove("site-wrapper-3");
  siteWrapper.classList.remove("site-wrapper-2");
  siteWrapper.classList.add("site-wrapper-1");

  sliderList2.classList.remove("slide-current");
  sliderList3.classList.remove("slide-current");
  sliderList1.classList.add("slide-current");

  sliderBtn2.classList.remove("current");
  sliderBtn3.classList.remove("current");
  sliderBtn1.classList.add("current");
});

sliderBtn2.addEventListener("click", function () {
  siteWrapper.classList.remove("site-wrapper-1");
  siteWrapper.classList.remove("site-wrapper-3");
  siteWrapper.classList.add("site-wrapper-2");

  sliderList1.classList.remove("slide-current");
  sliderList3.classList.remove("slide-current");
  sliderList2.classList.add("slide-current");

  sliderBtn1.classList.remove("current");
  sliderBtn3.classList.remove("current");
  sliderBtn2.classList.add("current");
});

sliderBtn3.addEventListener("click", function () {
  siteWrapper.classList.remove("site-wrapper-1");
  siteWrapper.classList.remove("site-wrapper-2");
  siteWrapper.classList.add("site-wrapper-3");

  sliderList1.classList.remove("slide-current");
  sliderList2.classList.remove("slide-current");
  sliderList3.classList.add("slide-current");

  sliderBtn1.classList.remove("current");
  sliderBtn2.classList.remove("current");
  sliderBtn3.classList.add("current");
});

// Modal window

let feedback = document.querySelector(".button-feedback");

let modal = document.querySelector(".modal-wrapper");
let modalShadow = document.querySelector(".modal-shadow");
let modalClose = modal.querySelector(".modal-close");

let modalForm = modal.querySelector("form");
let modalLogin = modal.querySelector("[name=login]");
let modalEmail = modal.querySelector("[name=email]");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
  modalShadow.classList.add("modal-shadow-on");

  if (storage) {
    modalLogin.value = storage;
    modalEmail.focus();
  } else {
    modalLogin.focus();
  }
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
  modal.classList.remove("modal-error");
  modalShadow.classList.remove("modal-shadow-on");
});

modalForm.addEventListener("submit", function (evt) {
  if (!modalLogin.value || !modalEmail.value) {
    evt.preventDefault();
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", modalLogin.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal-show")) {
      modal.classList.remove("modal-show");
      modal.classList.remove("modal-error");
      modalShadow.classList.remove("modal-shadow-on");
    }
  }
});
