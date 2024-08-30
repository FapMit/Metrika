const MODAL_OPENED_CLASSNAME = "modal-wrapper--open";

const modalOpenButtonNode = document.querySelector(".services__btn");
const modalCloseButtonNode = document.querySelector(".modal__btn-close");

const modalNode = document.querySelector(".modal-wrapper");

document.body.removeChild(modalNode);

modalOpenButtonNode.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.appendChild(modalNode);

  setTimeout(() => {
    modalNode.classList.add(MODAL_OPENED_CLASSNAME);
  }, 100);
});

modalCloseButtonNode.addEventListener("click", (e) => {
  e.preventDefault();
  modalNode.classList.remove(MODAL_OPENED_CLASSNAME);
  setTimeout(() => {
    document.body.removeChild(modalNode);
  }, 100);
});

modalNode.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains(MODAL_OPENED_CLASSNAME)) {
    modalNode.classList.remove(MODAL_OPENED_CLASSNAME);
    setTimeout(() => {
      document.body.removeChild(modalNode);
    }, 100);
  }
});
