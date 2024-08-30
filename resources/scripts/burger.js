const BURGER_OPENED_CLASSLIST = "burger-open";
const BURGER_MENU_OPENED_CLASSLIST = "burger__menu-open";

const burgerButtonNode = document.querySelector(".burger");
const burgerMenuNode = document.querySelector(".burger__menu");

const links = document.querySelectorAll(".link");

burgerButtonNode.addEventListener("click", (e) => {
  e.preventDefault();
  burgerButtonNode.classList.add("burger-effect");
  setTimeout(() => {
    burgerButtonNode.classList.toggle(BURGER_OPENED_CLASSLIST);
  }, 500);
  setTimeout(() => {
    burgerButtonNode.classList.remove("burger-effect");
  }, 800);
  burgerMenuNode.classList.toggle(BURGER_MENU_OPENED_CLASSLIST);
});

burgerMenuNode.addEventListener("click", (e) => {
  burgerButtonNode.classList.add("burger-effect");
  setTimeout(() => {
    burgerButtonNode.classList.remove(BURGER_OPENED_CLASSLIST);
  }, 500);
  setTimeout(() => {
    burgerButtonNode.classList.remove("burger-effect");
  }, 800);
  burgerMenuNode.classList.remove(BURGER_MENU_OPENED_CLASSLIST);
});

links.forEach(function (e) {
  e.addEventListener("click", () => {
    burgerButtonNode.classList.add("burger-effect");
    setTimeout(() => {
      burgerButtonNode.classList.remove(BURGER_OPENED_CLASSLIST);
    }, 500);
    setTimeout(() => {
      burgerButtonNode.classList.remove("burger-effect");
    }, 800);
    burgerMenuNode.classList.remove(BURGER_MENU_OPENED_CLASSLIST);
  });
});
