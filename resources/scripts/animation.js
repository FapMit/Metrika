let preloadNode = document.querySelector(".preload");

let headerAnimNode = document.querySelector(".header");

let navListItemNode = document.querySelectorAll(".nav__list-item");

let heroTitleNode = document.querySelector(".hero__title");
let heroTitleText = document.querySelector(".hero__title").innerHTML.split("");
let heroBoxNode = document.querySelector(".hero__box");
let heroBoxText = document.querySelector(".hero__box-text");

heroTitleNode.innerHTML = "";

let heroBoxTextInnerHTML = heroBoxText.innerHTML.split("");

heroBoxText.innerHTML = "";

for (let i = 0; i < heroTitleText.length; i++) {
  let span = document.createElement("span");
  span.innerHTML = heroTitleText[i];
  span.style = `--i: ${i}`;
  heroTitleNode.appendChild(span);
}

for (let i = 0; i < heroBoxTextInnerHTML.length; i++) {
  let span = document.createElement("span");
  span.innerHTML = heroBoxTextInnerHTML[i];
  span.style = `--i: ${i}`;
  heroBoxText.appendChild(span);
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    preloadNode.classList.add("preload--hide");
    preloadNode.style = "z-index: -1";
  }, 10000);
  setTimeout(() => {
    headerAnimNode.classList.remove("header--hide");
    document.body.removeChild(preloadNode);
  }, 10100);
  setTimeout(() => {
    for (let i = 0; i < navListItemNode.length; i++) {
      navListItemNode[i].classList.remove("nav__list-item--hide");
    }
  }, 10500);
  setTimeout(() => {
    heroTitleNode.classList.remove("hero__title-hide");
    heroBoxNode.classList.remove("hero__box-hide");
  }, 11000);
  setTimeout(() => {
    heroBoxText.classList.remove("hero__box-text--hide");
  }, 11500);
});
