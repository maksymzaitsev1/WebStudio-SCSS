"use strict";

const refs = {
  openModalBtn: document.querySelector("[data-modal-open]"),
  modal: document.querySelector("[data-modal]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
};

const toggleModal = () => {
  refs.modal.classList.toggle("is-hidden");
  document.body.classList.toggle("no-scroll");
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

document.querySelector(".regular-title").addEventListener("click", function () {
  const title = this;
  title.classList.add("rotate");

  title.addEventListener("animationend", () => {
    title.classList.remove("rotate");
  });
});
