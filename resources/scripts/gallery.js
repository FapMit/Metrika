const ACTIVE_SLIDE_CLASSNAME = "gallery__slide-active";

const slidesNodes = Array.from(document.querySelectorAll(".gallery__slide"));

const prevButtonNode = document.querySelector(".gallery__btn-prev");
const nextButtonNode = document.querySelector(".gallery__btn-next");

let activeId;

initGallery();

function initGallery() {
  activeId = 0;

  prevButtonNode.addEventListener("click", () => {
    setActiveSlideById(getPrevId());
  });

  nextButtonNode.addEventListener("click", () => {
    setActiveSlideById(getNextId());
  });
}

function setActiveSlideById(id) {
  const currentId = activeId;
  activeId = id;

  slidesNodes[currentId].classList.remove(ACTIVE_SLIDE_CLASSNAME);
  setTimeout(() => {
    slidesNodes[currentId].style.cssText = `z-index: 3`;
  }, 500);
  slidesNodes[activeId].style.cssText = `z-index: 5`;
  setTimeout(() => {
    slidesNodes[activeId].classList.add(ACTIVE_SLIDE_CLASSNAME);
  }, 500);
}

function getPrevId() {
  return activeId === 0 ? slidesNodes.length - 1 : activeId - 1;
}

function getNextId() {
  return activeId === slidesNodes.length - 1 ? 0 : activeId + 1;
}
