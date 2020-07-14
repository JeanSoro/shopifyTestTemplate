// hamburger menu trigger function

const selectHamburger = (toggleMenuElement) => {
  return document.querySelector(toggleMenuElement);
}


let menuToggler = selectHamburger('.menu-toggle');
let body = selectHamburger('body');


menuToggler.addEventListener('click', () => {
  body.classList.toggle('open');
})