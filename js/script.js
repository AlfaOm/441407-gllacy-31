// Slider

const siteWrapper = document.querySelector(".site-wrapper");
const slides = document.querySelectorAll(".slider-item");
const buttons = document.querySelectorAll(".slider-controls button");

let currentSlide = document.querySelector(".slide-current");
let currentBtn = document.querySelector(".slider-controls button.current");

const changeCurrentSlide = (index) => {
  currentSlide.classList.remove("slide-current");
  slides[index].classList.add("slide-current");
  currentSlide = slides[index];
  currentBtn.classList.remove("current");
  buttons[index].classList.add("current");
  currentBtn = buttons[index];
  siteWrapper.className = ("site-wrapper site-wrapper-" + (index + 1));
}

for (let i = 0; i < slides.length; i++) {
  buttons[i].addEventListener("click", (evt) => {
    evt.preventDefault();
    if (evt.target === currentBtn) {
      return;
    }
    changeCurrentSlide(i);
  });
}


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
