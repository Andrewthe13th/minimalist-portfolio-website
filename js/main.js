/* functions */
const openHamburger = () => {
  if(hamburgerIcon.src !== hamburgerIconSource){
    navLinks_top.classList.remove('show');
    hamburgerIcon.src = "./images/icons/hamburger.svg";
    return;
  }
  // console.log(hamburgerIcon.src + " === " + hamburgerIconSource);

  hamburgerIcon.src = "./images/icons/close.svg";
  navLinks_top.classList.add("show");
}

const closeDropDown = (e) => {
  console.log(e);
  if(!e.target.matches('.dropDown')){
    if(navLinks_top.classList.contains('show')){
      navLinks_top.classList.remove('show');
      hamburgerIcon.src = "./images/icons/hamburger.svg";
    }
  }
}

/* selectors */
const hamburgerButton = document.querySelector("#hamburger");
const hamburgerIcon = document.querySelector("#hamburger-icon");
const hamburgerIconSource = hamburgerIcon.src;
const navLinks_top = document.querySelector("#dropDown-list");

/* globals */


/* global functions */

/* event functions */
hamburgerButton.addEventListener('click',openHamburger)
window.onclick = closeDropDown;