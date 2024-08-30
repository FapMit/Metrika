const HEADER_SCROLL_CLASSLIST = "header__scroll";

const headerNode = document.querySelector(".header");

window.addEventListener("scroll", function () {
  if (pageYOffset > 10) {
    headerNode.classList.add(HEADER_SCROLL_CLASSLIST);
  } else {
    headerNode.classList.remove(HEADER_SCROLL_CLASSLIST);
  }
});
