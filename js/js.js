let feedback = document.querySelector(".button-feedback");

let modal = document.querySelector(".modal");
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

feedback.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("modal-show");

    if (storage) {
      modalLogin.value = storage;
      modalEmail.focus();
    } else {
      modalLogin.focus();
    }
});

modalClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.remove("modal-show");
    modal.classList.remove("modal-error");
});

modalForm.addEventListener("submit", function(evt) {
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

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal-show")) {
      modal.classList.remove("modal-show");
      modal.classList.remove("modal-error");
    }
  }
});
